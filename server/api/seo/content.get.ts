export default defineEventHandler(async () => {
  try {
    const data = await useStorage('assets:server').getItem('seo-data:content.json')
    return data
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error reading content data'
    })
  }
})
