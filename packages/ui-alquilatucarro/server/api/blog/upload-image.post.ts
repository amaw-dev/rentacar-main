import { defineEventHandler, readMultipartFormData } from 'h3'
import sharp from 'sharp'
import { createHash } from 'crypto'
import { optimizeImage } from '~/server/utils/image-optimizer'
import { uploadToStorage } from '~/server/utils/firebase-storage'
import { logger } from '~/server/utils/logger'
import { BlogApiError, handleBlogApiError } from '~/server/utils/error-handler'

export default defineEventHandler(async (event) => {
  try {
    const startTime = Date.now()

    // Parse form data
    const formData = await readMultipartFormData(event)
    if (!formData) {
      throw new BlogApiError('No form data provided', 400)
    }

    // Extract file and type
    const fileEntry = formData.find(item => item.name === 'file')
    const typeEntry = formData.find(item => item.name === 'type')

    if (!fileEntry || !fileEntry.data) {
      throw new BlogApiError('No image file provided', 400)
    }

    const type = (typeEntry?.data?.toString() as 'featured' | 'content') || 'content'

    // Validate image type from buffer using Sharp
    const metadata = await sharp(fileEntry.data).metadata()
    const validFormats = ['jpeg', 'jpg', 'png', 'webp', 'gif']

    if (!metadata.format || !validFormats.includes(metadata.format)) {
      throw new BlogApiError(
        `Invalid image format: ${metadata.format}. Supported: ${validFormats.join(', ')}`,
        400
      )
    }

    // Optimize image
    const optimizedResult = await optimizeImage(fileEntry.data, type)

    // Generate unique filename with timestamp and hash
    const timestamp = Date.now()
    const hash = createHash('md5')
      .update(optimizedResult.buffer)
      .digest('hex')
      .substring(0, 8)
    const filename = `${timestamp}-${hash}.webp`
    const storagePath = `blog-images/${type}/${filename}`

    // Upload to Firebase Storage
    const publicUrl = await uploadToStorage(
      optimizedResult.buffer,
      storagePath,
      'image/webp'
    )

    // Log metrics
    logger.metric('upload-image', Date.now() - startTime, {
      type,
      originalSize: optimizedResult.originalSize,
      optimizedSize: optimizedResult.optimizedSize,
      savings: optimizedResult.savings
    })

    // Return response
    return {
      url: publicUrl,
      originalSize: optimizedResult.originalSize,
      optimizedSize: optimizedResult.optimizedSize,
      savings: optimizedResult.savings
    }
  } catch (error) {
    return handleBlogApiError(error, 'upload-image')
  }
})
