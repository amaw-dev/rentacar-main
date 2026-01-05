import type { AggregateRating, Review, Person, Organization } from 'schema-dts'
import type { Testimonial } from '#imports'

interface AggregateRatingOptions {
    testimonials: Testimonial[]
    itemReviewed?: {
        type: 'Organization' | 'LocalBusiness' | 'AutoRental'
        name: string
        url?: string
    }
    cityName?: string
}

/**
 * Composable to add AggregateRating and Review structured data
 * Displays star ratings in Google SERPs
 */
export const useAggregateRating = (options: AggregateRatingOptions) => {
    const { franchise } = useAppConfig()

    const { testimonials, itemReviewed, cityName } = options

    if (!testimonials || testimonials.length === 0) return

    const reviewCount = testimonials.length
    const ratingValue = 4.9 // Based on displayed rating in UI

    // Create the organization being reviewed
    const reviewedItem = itemReviewed || {
        type: 'AutoRental' as const,
        name: cityName
            ? `${franchise.shortname} ${cityName}`
            : franchise.shortname,
        url: franchise.website
    }

    // Create individual Review schemas
    const reviews = testimonials.map((testimonial, index) => {
        return <Review>{
            '@type': 'Review',
            '@id': `${franchise.website}#review-${index}`,
            author: <Person>{
                '@type': 'Person',
                name: testimonial.user.name
            },
            reviewBody: testimonial.quote,
            reviewRating: {
                '@type': 'Rating',
                ratingValue: 5,
                bestRating: 5,
                worstRating: 1
            },
            itemReviewed: {
                '@type': reviewedItem.type,
                name: reviewedItem.name,
                ...(reviewedItem.url && { url: reviewedItem.url })
            }
        }
    })

    // Create AggregateRating schema attached to Organization
    const organizationWithRating = <Organization>{
        '@type': reviewedItem.type,
        '@id': `${franchise.website}${cityName ? `/${cityName.toLowerCase()}` : ''}#rating`,
        name: reviewedItem.name,
        url: reviewedItem.url || franchise.website,
        aggregateRating: <AggregateRating>{
            '@type': 'AggregateRating',
            ratingValue: ratingValue,
            reviewCount: reviewCount,
            bestRating: 5,
            worstRating: 1,
            ratingCount: reviewCount
        },
        review: reviews.slice(0, 5) // Include up to 5 reviews inline
    }

    useSchemaOrg([organizationWithRating])

    return {
        ratingValue,
        reviewCount,
        reviews,
        organizationWithRating
    }
}

/**
 * Simplified version for homepage (global testimonials)
 */
export const useHomeAggregateRating = () => {
    const { franchise, testimonials } = useAppConfig()

    return useAggregateRating({
        testimonials: testimonials as Testimonial[],
        itemReviewed: {
            type: 'AutoRental',
            name: franchise.shortname,
            url: franchise.website
        }
    })
}

/**
 * City-specific version
 */
export const useCityAggregateRating = (cityName: string, testimonials: Testimonial[]) => {
    const { franchise } = useAppConfig()
    const route = useRoute()
    const citySlug = route.params.city as string

    return useAggregateRating({
        testimonials,
        itemReviewed: {
            type: 'AutoRental',
            name: `${franchise.shortname} ${cityName}`,
            url: `${franchise.website}/${citySlug}`
        },
        cityName
    })
}
