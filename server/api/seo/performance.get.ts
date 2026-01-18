export default defineEventHandler(async () => {
  try {
    const data = await useStorage('assets:server').getItem('seo-data:performance.json')
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error reading performance data'
    })
  }
})
