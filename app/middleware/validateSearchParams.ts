import {
  useStoreAdminData,
  createDateFromString,
  createTimeFromString,
  createCurrentDateObject,
  isTimeObject,
  toDatetime,
  dayDifference
} from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  
  const { createMessage } = useMessages();

  const fecha_recogida = to.params.fecha_recogida as string;
  let fecha_devolucion = to.params.fecha_devolucion as string;
  const hora_recogida = to.params.hora_recogida as string;
  const hora_devolucion = to.params.hora_devolucion as string;
  
  const dateFechaRecogida = createDateFromString(fecha_recogida);
  const dateFechaDevolucion = createDateFromString(fecha_devolucion);
  const dateHoraRecogida = createTimeFromString(hora_recogida);
  const dateHoraDevolucion = createTimeFromString(hora_devolucion);

  // Puedes hacer validaciones o procesamiento basado en esos parámetros
  if (
    !(
      isDateObject(dateFechaRecogida) &&
      isDateObject(dateFechaDevolucion) &&
      isTimeObject(dateHoraRecogida) &&
      isTimeObject(dateHoraDevolucion) 
    )
  ) {
    
    const {
      defaultLugarRecogida,
      defaultLugarDevolucion,
      defaultFechaRecogida,
      defaultFechaDevolucion,
      defaultHoraRecogida,
      defaultHoraDevolucion
    } = useDefaultRouteParams();

    to.params.lugar_recogida = defaultLugarRecogida.value as string;
    to.params.lugar_devolucion = defaultLugarDevolucion.value as string;
    to.params.fecha_recogida = defaultFechaRecogida.value as string;
    to.params.fecha_devolucion = defaultFechaDevolucion.value as string;
    to.params.hora_recogida = defaultHoraRecogida.value as string;
    to.params.hora_devolucion = defaultHoraDevolucion.value as string;
    
    createMessage({
      type: "info",
      message: "Parámetros inválidos. Se ajustaron a los valores por defecto.",
    });
    
    return navigateTo({
      name: to.name,
      params: {
        ...to.params,
      },
      query: to.query,
    });

  }

  // Validación: fecha de recogida en el pasado
  // Si el usuario accede con una URL que tiene fecha pasada (ej: link guardado, historial),
  // redirige automáticamente a mañana con devolución +7 días para evitar errores.
  // Impacto: bajo, solo afecta URLs con fechas inválidas.
  const today = createCurrentDateObject();
  if (dateFechaRecogida.compare(today) < 0) {
    const tomorrow = today.add({ days: 1 });
    const newReturnDate = tomorrow.add({ days: 7 });

    to.params.fecha_recogida = tomorrow.toString();
    to.params.fecha_devolucion = newReturnDate.toString();

    return navigateTo({
      name: to.name,
      params: {
        ...to.params
      }
    });
  }

  // Cuando la diferencia de fechas es mensual
  if(
    dayDifference(dateFechaDevolucion, dateFechaRecogida) == 30 
    && dateHoraDevolucion.compare(dateHoraRecogida) > 0
  ){
      to.params.hora_devolucion = formatTime(toDatetime(createCurrentDateObject(), dateHoraRecogida));

      return navigateTo({
        name: to.name,
        params: {
          ...to.params
        },
        query: to.query,
      });

  }

  // Cuando la diferencia de fechas supera el mes
  if(dayDifference(dateFechaDevolucion, dateFechaRecogida) > 30){

    fecha_devolucion = (dateFechaRecogida.copy()).add({days: 30}).toString();
    to.params.fecha_devolucion = fecha_devolucion;


    createMessage({
      type: "info",
      message: "La fecha de devolución ha sido ajustada a 30 días después de la fecha de recogida.",
    });

    return navigateTo({
      name: to.name,
      params: {
        ...to.params
      },
      query: to.query,
    });

  }

  // Si la validación pasa, continúa con la navegación
  // Aquí no es necesario hacer nada, ya que si no retornas nada, la navegación continúa
})