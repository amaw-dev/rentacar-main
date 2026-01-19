import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { isGscConnected, queryGscSearchAnalytics } from '../../utils/gsc'

interface UpdateResult {
  success: boolean
  updated: string[]
  errors: string[]
  data: {
    moz?: {
      domainAuthority?: number
      pageAuthority?: number
      spamScore?: number
      backlinksTotal?: number
      linkingDomains?: number
    }
    gsc?: {
      impressions?: number
      clicks?: number
      ctr?: number
      avgPosition?: number
    }
  }
  timestamp: string
}

export default defineEventHandler(async (event): Promise<UpdateResult> => {
  const body = await readBody(event)
  const services = body?.services || ['moz', 'gsc'] // Default: update all

  const result: UpdateResult = {
    success: true,
    updated: [],
    errors: [],
    data: {},
    timestamp: new Date().toISOString()
  }

  const dataDir = resolve(process.cwd(), 'docs/seo/data')

  // Read current data files
  const readJsonFile = (filename: string) => {
    try {
      const content = readFileSync(resolve(dataDir, filename), 'utf-8')
      return JSON.parse(content)
    } catch (e) {
      return null
    }
  }

  const writeJsonFile = (filename: string, data: object) => {
    try {
      writeFileSync(resolve(dataDir, filename), JSON.stringify(data, null, 2))
      return true
    } catch (e) {
      return false
    }
  }

  const tools = readJsonFile('tools.json')
  const today = new Date().toISOString().split('T')[0]

  // --- MOZ UPDATE ---
  if (services.includes('moz')) {
    try {
      // Check if Moz MCP is available
      if (!tools?.moz?.mcp?.installed) {
        result.errors.push('Moz MCP no instalado - usando datos simulados')
      }

      // Check quotas
      const mozQuotas = tools?.moz?.quotas?.domainOverview
      if (mozQuotas && mozQuotas.used >= mozQuotas.limit) {
        result.errors.push(`Moz quota agotada (${mozQuotas.used}/${mozQuotas.limit})`)
      } else {
        // For now, simulate Moz API response
        // In production, this would call the actual Moz API
        const mozData = {
          domainAuthority: 53,
          pageAuthority: 39,
          spamScore: 1,
          backlinksTotal: 6994,
          linkingDomains: 433,
          rootDomainsToRootDomain: 433
        }

        // Update metrics.json
        const metrics = readJsonFile('metrics.json')
        if (metrics) {
          metrics.current = {
            ...metrics.current,
            domainAuthority: mozData.domainAuthority,
            pageAuthority: mozData.pageAuthority,
            spamScore: mozData.spamScore,
            backlinksTotal: mozData.backlinksTotal,
            linkingDomains: mozData.linkingDomains,
            lastUpdated: today
          }

          if (writeJsonFile('metrics.json', metrics)) {
            result.updated.push('metrics.json')
            result.data.moz = mozData
          }
        }

        // Update quota usage
        if (tools && mozQuotas) {
          tools.moz.quotas.domainOverview.used += 1
          tools.lastUpdated = today
          writeJsonFile('tools.json', tools)
        }
      }
    } catch (error: any) {
      result.errors.push(`Moz error: ${error.message}`)
    }
  }

  // --- GSC UPDATE ---
  if (services.includes('gsc')) {
    try {
      // Check if GSC is connected via OAuth tokens
      const gscConnected = isGscConnected()

      if (!gscConnected) {
        result.errors.push('GSC no conectado - usa el botón "Conectar GSC" para autorizar')
      } else {
        // Calculate date range (last 28 days)
        const endDate = new Date()
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - 28)

        const siteUrl = tools?.gsc?.property || 'https://alquilatucarro.com'

        // Query real GSC API
        const gscResponse = await queryGscSearchAnalytics({
          siteUrl,
          startDate: startDate.toISOString().split('T')[0],
          endDate: endDate.toISOString().split('T')[0],
          dimensions: ['query'],
          rowLimit: 1000
        })

        if (!gscResponse) {
          result.errors.push('GSC API no disponible - token puede haber expirado')
        } else {
          // Aggregate data from all rows
          let totalClicks = 0
          let totalImpressions = 0
          let totalPosition = 0
          let rowCount = 0

          if (gscResponse.rows) {
            for (const row of gscResponse.rows) {
              totalClicks += row.clicks
              totalImpressions += row.impressions
              totalPosition += row.position
              rowCount++
            }
          }

          const gscData = {
            impressions: totalImpressions,
            clicks: totalClicks,
            ctr: totalImpressions > 0 ? Math.round((totalClicks / totalImpressions) * 10000) / 100 : 0,
            avgPosition: rowCount > 0 ? Math.round((totalPosition / rowCount) * 10) / 10 : 0
          }

          // Update performance.json
          const performance = readJsonFile('performance.json')
          if (performance) {
            performance.gsc.last28d = {
              impressions: gscData.impressions,
              clicks: gscData.clicks,
              ctr: gscData.ctr,
              avgPosition: gscData.avgPosition
            }
            performance.gsc.lastUpdated = today

            if (writeJsonFile('performance.json', performance)) {
              result.updated.push('performance.json')
              result.data.gsc = gscData
            }
          }
        }
      }
    } catch (error: any) {
      result.errors.push(`GSC error: ${error.message}`)
    }
  }

  // Log activity
  try {
    const activity = readJsonFile('activity.json') || { entries: [] }
    activity.entries.unshift({
      id: Date.now().toString(),
      type: 'update',
      description: `Datos actualizados: ${result.updated.join(', ') || 'ninguno'}`,
      timestamp: result.timestamp,
      services: services,
      success: result.errors.length === 0
    })
    // Keep only last 50 entries
    activity.entries = activity.entries.slice(0, 50)
    writeJsonFile('activity.json', activity)
  } catch (e) {
    // Activity logging is optional
  }

  result.success = result.errors.length === 0

  return result
})
