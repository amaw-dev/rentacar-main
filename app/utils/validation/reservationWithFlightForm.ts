import * as v from 'valibot';
import '@valibot/i18n/es';
v.setGlobalConfig({ lang: 'es' });

import { 
    ReservationFormValidationSchema, 
    FlightFormValidationSchema,

} from '#imports';

export const ReservationWithFlightFormValidationSchema = v.object({
    ...ReservationFormValidationSchema.entries,
    ...FlightFormValidationSchema.entries,
});

export type ReservationWithFlightFormValidationSchemaType = v.InferOutput<typeof ReservationWithFlightFormValidationSchema>
