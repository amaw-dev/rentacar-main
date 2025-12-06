import * as v from 'valibot';
import '@valibot/i18n/es';
v.setGlobalConfig({ lang: 'es' });

export const CategoryFormValidationSchema = v.object({
    vehiculo: v.pipe(v.string('Se requiere seleccionar una categoría de vehículo'), v.maxLength(1)),
});