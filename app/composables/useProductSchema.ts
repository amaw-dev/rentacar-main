import type { Product, Offer, AggregateOffer, Car } from 'schema-dts'
import type { CategoryAvailabilityData, VehicleCategory, CategoryModelData } from '#imports'

interface ProductSchemaOptions {
    category: CategoryAvailabilityData
    vehicleCategory?: VehicleCategory
    cityName?: string
}

export const useProductSchema = (options: ProductSchemaOptions) => {
    const { franchise } = useAppConfig()
    const route = useRoute()

    const { category, vehicleCategory, cityName } = options

    if (!vehicleCategory) return

    const citySlug = route.params.city as string || ''
    const cityLabel = cityName || citySlug

    const categoryName = vehicleCategory.grupo
    const categoryCode = category.categoryCode
    const description = vehicleCategory.descripcion_larga || vehicleCategory.descripcion_corta

    const models = category.categoryModels || []
    const modelNames = models.map((m: CategoryModelData) => m.name).join(', ')

    const dailyPrice = category.vehicleDayCharge + category.coverageUnitCharge
    const totalPrice = category.estimatedTotalAmount

    const productSchema = <Product>{
        '@type': 'Product',
        '@id': `${franchise.website}/${citySlug}#vehicle-${categoryCode}`,
        name: `Alquiler ${categoryName} en ${cityLabel}`,
        description: `${description}. Modelos disponibles: ${modelNames}`,
        category: 'Alquiler de Vehículos',
        brand: {
            '@type': 'Brand',
            name: 'Alquilatucarro'
        },
        image: models[0]?.image || franchise.logo,
        offers: <AggregateOffer>{
            '@type': 'AggregateOffer',
            priceCurrency: 'COP',
            lowPrice: dailyPrice,
            highPrice: dailyPrice * 30,
            offerCount: models.length || 1,
            availability: 'https://schema.org/InStock',
            priceValidUntil: getNextMonthDate(),
            seller: {
                '@type': 'Organization',
                name: 'Alquilatucarro',
                url: franchise.website
            },
            areaServed: {
                '@type': 'City',
                name: cityLabel,
                containedInPlace: {
                    '@type': 'Country',
                    name: 'Colombia'
                }
            }
        },
        additionalProperty: [
            {
                '@type': 'PropertyValue',
                name: 'Categoría',
                value: categoryCode
            },
            {
                '@type': 'PropertyValue',
                name: 'Tipo',
                value: categoryName
            },
            ...vehicleCategory.tags.map(tag => ({
                '@type': 'PropertyValue',
                name: 'Característica',
                value: tag
            }))
        ]
    }

    useSchemaOrg([productSchema])

    return {
        productSchema
    }
}

function getNextMonthDate(): string {
    const date = new Date()
    date.setMonth(date.getMonth() + 1)
    return date.toISOString().split('T')[0] as string
}

export const useCarSchema = (options: ProductSchemaOptions) => {
    const { franchise } = useAppConfig()
    const route = useRoute()

    const { category, vehicleCategory, cityName } = options

    if (!vehicleCategory || !category.categoryModels?.length) return

    const citySlug = route.params.city as string || ''
    const cityLabel = cityName || citySlug

    const models = category.categoryModels

    const carSchemas = models.slice(0, 3).map((model: CategoryModelData, index: number) => {
        return <Car>{
            '@type': 'Car',
            '@id': `${franchise.website}/${citySlug}#car-${category.categoryCode}-${index}`,
            name: model.name,
            image: model.image,
            vehicleConfiguration: vehicleCategory.grupo,
            description: `${model.name} disponible para alquiler en ${cityLabel}`,
            offers: <Offer>{
                '@type': 'Offer',
                priceCurrency: 'COP',
                price: category.vehicleDayCharge + category.coverageUnitCharge,
                priceValidUntil: getNextMonthDate(),
                availability: 'https://schema.org/InStock',
                seller: {
                    '@type': 'Organization',
                    name: 'Alquilatucarro'
                }
            }
        }
    })

    useSchemaOrg(carSchemas)

    return {
        carSchemas
    }
}
