/**
 * Branches (sucursales) configuration shared across all brands
 * All brands operate from the same physical locations in Colombia
 */
export interface Branch {
  id: number;
  code: string;
  name: string;
  city: string;
  schedule: string;
}

export const branchesConfig: Branch[] = [
  {
    id: 1,
    code: "AARME",
    name: "Armenia Aeropuerto",
    city: "armenia",
    schedule: "Lun-Vie 06:00-19:00 | Sáb, Dom y fest 08:00-16:00",
  },
  {
    id: 2,
    code: "AABAN",
    name: "Barranquilla Aeropuerto",
    city: "barranquilla",
    schedule: "Todos los días 07:00-20:00",
  },
  {
    id: 3,
    code: "ACBAN",
    name: "Barranquilla Norte",
    city: "barranquilla",
    schedule: "Lun-Vie 08:00-16:00 | Sáb, Dom y fest 08:00-13:00",
  },
  {
    id: 4,
    code: "ACBSD",
    name: "Soledad Aeropuerto",
    city: "soledad",
    schedule: "Lun-Dom 06:30-20:00",
  },
  {
    id: 5,
    code: "AABOT",
    name: "Bogotá Aeropuerto",
    city: "bogota",
    schedule: "Lun-Dom 24 horas | Festivos 06:00-21:00",
  },
  {
    id: 7,
    code: "ACBEX",
    name: "Bogotá Almacén Éxito del Country",
    city: "bogota",
    schedule: "Todos los días 06:30-20:00",
  },
  {
    id: 8,
    code: "ACBNN",
    name: "Bogotá Centro Nuestro",
    city: "bogota",
    schedule: "Todos los días 06:30-18:00",
  },
  {
    id: 10,
    code: "AABCR",
    name: "Bucaramanga Aeropuerto",
    city: "bucaramanga",
    schedule: "Todos los días 06:30-18:30",
  },
  {
    id: 11,
    code: "ACBCR",
    name: "Floridablanca",
    city: "floridablanca",
    schedule: "Lun-Vie 08:00-15:00 | Sáb, Dom y fest 08:00-13:00",
  },
  {
    id: 12,
    code: "AAKAL",
    name: "Cali Aeropuerto",
    city: "cali",
    schedule: "Lun-Sáb 06:00-21:00 | Dom y fest 08:00-16:00",
  },
  {
    id: 13,
    code: "ACKAL",
    name: "Cali Sur Camino Real",
    city: "cali",
    schedule: "Lun-Sáb 08:00-16:00 | Dom y fest Cerrado",
  },
  {
    id: 14,
    code: "ACKJC",
    name: "Cali Norte Chipichape",
    city: "cali",
    schedule: "Lun-Sáb 08:00-16:00 | Dom y fest 08:00-13:00",
  },
  {
    id: 15,
    code: "ACKPA",
    name: "Palmira",
    city: "palmira",
    schedule: "Lun-Vie 06:00-20:00 | Sáb, Dom y fest 08:00-15:00",
  },
  {
    id: 16,
    code: "AACTG",
    name: "Cartagena Aeropuerto",
    city: "cartagena",
    schedule: "Todos los días 06:30-20:00",
  },
  {
    id: 17,
    code: "AACUC",
    name: "Cúcuta Aeropuerto",
    city: "cucuta",
    schedule: "Lun-Vie 07:00-18:00 | Sáb, Dom y fest 08:00-15:00",
  },
  {
    id: 18,
    code: "ACIBG",
    name: "Ibagué",
    city: "ibague",
    schedule: "Lun-Vie 08:00-16:00 | Sáb, Dom y fest 08:00-13:00",
  },
  {
    id: 19,
    code: "ACMNZ",
    name: "Manizales",
    city: "manizales",
    schedule: "Lun-Vie 08:00-16:00 | Sáb, Dom y fest 08:00-13:00",
  },
  {
    id: 20,
    code: "ACMDL",
    name: "Medellín Poblado",
    city: "medellin",
    schedule: "Lun-Sáb 07:00-18:00 | Dom y fest 08:00-15:00",
  },
  {
    id: 21,
    code: "ACMCL",
    name: "Medellín Centro Éxito Colombia",
    city: "medellin",
    schedule: "Lun-Vie 08:00-15:00 | Sáb 08:00-13:00 | Dom y fest Cerrado",
  },
  {
    id: 22,
    code: "AAMDL",
    name: "Medellín Aeropuerto José María Córdoba",
    city: "medellin",
    schedule: "Todos los días 06:00-23:00",
  },
  {
    id: 23,
    code: "ACMJM",
    name: "Rionegro",
    city: "medellin",
    schedule: "Todos los días 06:00-23:00",
  },
  {
    id: 25,
    code: "AAMTR",
    name: "Montería Aeropuerto",
    city: "monteria",
    schedule: "Lun-Vie 07:00-19:00 | Sáb, Dom y fest 08:00-16:00",
  },
  {
    id: 26,
    code: "ACMTR",
    name: "Montería Ciudad",
    city: "monteria",
    schedule: "Lun-Vie 08:00-15:00 | Sáb, Dom y fest 08:00-13:00",
  },
  {
    id: 27,
    code: "AANVA",
    name: "Neiva Aeropuerto",
    city: "neiva",
    schedule: "Lun-Vie 06:30-20:00 | Sáb, Dom y fest 08:00-15:00",
  },
  {
    id: 28,
    code: "AAPEI",
    name: "Pereira Aeropuerto",
    city: "pereira",
    schedule: "Lun-Vie 06:30-19:30 | Sáb, Dom y fest 08:00-15:00",
  },
  {
    id: 30,
    code: "AASMR",
    name: "Santa Marta Aeropuerto",
    city: "santa-marta",
    schedule: "Todos los días 07:00-18:00",
  },
  {
    id: 31,
    code: "AAVAL",
    name: "Valledupar Aeropuerto",
    city: "valledupar",
    schedule: "Lun-Vie 07:00-18:00 | Sáb, Dom y fest 08:00-15:00",
  },
  {
    id: 32,
    code: "ACVLL",
    name: "Villavicencio",
    city: "villavicencio",
    schedule: "Lun-Vie 08:00-16:00 | Sáb, Dom y fest 08:00-13:00",
  },
];
