import * as v from 'valibot';
import '@valibot/i18n/es';
v.setGlobalConfig({ lang: 'es' });

import { UserInformationFormValidationSchema, FlightFormValidationSchema } from '#imports';

export const UserInformationWithFlightFormValidationSchema = v.object({
    ...UserInformationFormValidationSchema.entries,
    ...FlightFormValidationSchema.entries,
});