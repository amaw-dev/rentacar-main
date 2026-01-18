import { readFileSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async () => {
  try {
    const dataPath = join(process.cwd(), 'docs/seo/data/metrics.json')
    const data = readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error reading metrics data'
    })
  }
})
