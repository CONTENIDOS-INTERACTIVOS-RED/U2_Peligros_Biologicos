export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Mecanismo de transmisión de riesgo biológico.',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mecanismo de transmisión de riesgo biológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Vía respiratoria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Vía dérmica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Vía parenteral',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Vía gástrica',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Vía enteral',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cadena epidemiológica de la enfermedad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Centers for Disease Control and Prevention (CDC). (2022). Infection control in healthcare settings.',
      link: 'https://www.cdc.gov/infectioncontrol',
    },
    {
      referencia:
        'World Health Organization (WHO). (2020). Modes of transmission of virus causing COVID-19: Implications for IPC precaution recommendations.',
      link: 'https://www.who.int/news-room/commentaries',
    },
  ],
  glosario: [
    {
      termino: 'Aerosoles',
      significado:
        'Partículas microscópicas suspendidas en el aire que pueden contener agentes infecciosos.',
    },
    {
      termino: 'Agente biológico',
      significado:
        'Microorganismo, virus, hongo, parásito o toxina capaz de causar daño a la salud humana.',
    },
    {
      termino: 'Agente etiológico',
      significado:
        'Organismo o entidad biológica que produce una enfermedad infecciosa en un huésped susceptible.',
    },
    {
      termino: 'Barrera cutánea',
      significado:
        'Función protectora natural de la piel que impide la entrada de microorganismos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas que se aplican para controlar riesgos biológicos y proteger la salud humana y el ambiente.',
    },
    {
      termino: 'Cadena epidemiológica',
      significado:
        'Modelo que explica cómo se transmite una enfermedad infecciosa desde el reservorio hasta el huésped susceptible.',
    },
    {
      termino: 'Contacto directo',
      significado:
        'Forma de transmisión donde el agente se transfiere por contacto físico directo con la fuente infectada.',
    },
    {
      termino: 'Contacto indirecto',
      significado:
        'Transmisión mediante objetos contaminados (fómites) como guantes, ropa o utensilios.',
    },
    {
      termino: 'Enteral',
      significado:
        'Vía de ingreso de agentes por el tracto gastrointestinal, mediante contacto con superficies u objetos contaminados.',
    },
    {
      termino: 'EPP (Equipo de Protección Personal)',
      significado:
        'Dispositivos o prendas utilizados para proteger al trabajador de la exposición a riesgos biológicos, físicos o químicos.',
    },
    {
      termino: 'Fómite',
      significado:
        'Objeto inanimado capaz de transmitir agentes patógenos al entrar en contacto con personas.',
    },
    {
      termino: 'Huésped susceptible',
      significado:
        'Persona con predisposición a enfermarse por carecer de defensas inmunológicas suficientes frente al agente infeccioso.',
    },
    {
      termino: 'Inhalación',
      significado:
        'Proceso de introducir aire a los pulmones, principal medio por el cual ingresan agentes por vía respiratoria.',
    },
    {
      termino: 'Parenteral',
      significado:
        'Vía de ingreso directo al organismo a través de heridas, cortes o agujas, evitando el tracto digestivo.',
    },
    {
      termino: 'Patogenicidad',
      significado:
        'Capacidad de un agente para causar enfermedad en un huésped.',
    },
    {
      termino: 'Puerta de entrada',
      significado:
        'Sitio por donde el agente infeccioso penetra en el organismo del huésped.',
    },
    {
      termino: 'Puerta de salida',
      significado:
        'Sitio por donde el agente abandona el reservorio para transmitirse a otro huésped.',
    },
    {
      termino: 'Reservorio',
      significado:
        'Lugar donde el agente infeccioso vive y se reproduce, pudiendo ser un humano, animal o medio ambiente.',
    },
    {
      termino: 'Respiratoria',
      significado:
        'Vía de transmisión en la que los agentes se diseminan por medio del aire y entran por las vías respiratorias.',
    },
    {
      termino: 'Transmisión',
      significado:
        'Proceso mediante el cual un agente infeccioso se propaga desde su reservorio hasta un huésped susceptible.',
    },
  ],
}
