
import { isValidPhoneNumber } from 'libphonenumber-js';
import * as v from "valibot";
import "@valibot/i18n/es";
v.setGlobalConfig({ lang: "es" });

export const UserInformationFormValidationSchema = v.object({
  nombreCompleto: v.pipe(v.string("Se requiere nombres"), v.minLength(1)),
  apellidos: v.pipe(v.string("Se requiere apellidos"), v.minLength(1)),
  tipoIdentificacion: v.string("Se debe seleccionar un tipo de identificación"),
  identificacion: v.pipe(
    v.string("Se requiere una identificación"),
    v.minLength(5, "La identificación debe tener más de 5 caracteres")
  ),
  telefono: v.pipe(
    v.string("Se requiere un número de teléfono o whatsapp"),
    v.minLength(5),
    v.custom((input) => isValidPhoneNumber(input as string), "Número de teléfono o Whatsapp no válido")
  ),
  email: v.pipe(v.string("Se requiere un email"), v.email("Email no válido")),
  politicaPrivacidad: v.pipe(
    v.boolean("Debe aceptar las políticas de privacidad"),
    v.value(true, "Debe aceptar las políticas de privacidad")
  ),
});

export type UserInformationFormValidationSchemaType = v.InferOutput<
  typeof UserInformationFormValidationSchema
>;
