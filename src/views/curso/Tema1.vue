<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Mecanismo de transmisión de riesgo biológico.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p(data-aos="fade-left").mb-5 Los mecanismos de transmisión de los riesgos biológicos son las formas mediante las cuales los agentes patógenos pueden transferirse de una fuente a un individuo susceptible, constituyendo un peligro para la salud. Comprender estos mecanismos es esencial para implementar medidas de control y prevención eficaces, especialmente en entornos laborales donde la exposición puede ser constante. Entre los principales mecanismos se encuentran:


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Contacto directo")
            p Ocurre mediante el contacto físico entre una fuente infectada y una persona susceptible, a través de lesiones en la piel, mucosas o secreciones corporales (sangre, saliva, semen, fluidos vaginales). Es frecuente en entornos hospitalarios al manipular pacientes o materiales contaminados.
    
          .div(titulo="Contacto indirecto")
            p Involucra objetos o superficies contaminadas (fómites), como instrumentos, ropa, guantes o residuos. El riesgo aumenta al manipularlos sin protección. La desinfección adecuada es fundamental para prevenir esta vía.
    
            
          .div(titulo="Vía aérea")
            p Los microorganismos se dispersan en partículas suspendidas en el aire (aerosoles, gotas). La inhalación puede causar infecciones respiratorias, especialmente en lugares cerrados y mal ventilados.
    
          .div(titulo="Vía mucocutánea")
            p Consiste en la entrada de agentes a través de mucosas o piel lesionada. Se presenta al tener contacto con líquidos infectados, materiales contaminados o por accidentes con objetos punzocortantes.
    
          .div(titulo="Vía por vectores")
            p Se da mediante organismos vivos como zancudos, garrapatas o pulgas que transmiten enfermedades al picar o morder, como el dengue, la malaria o la leishmaniasis.


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 A continuación, se presenta un video que explica los distintos mecanismos de ingreso de agentes infecciosos al organismo humano, clasificados según la vía corporal de penetración, con el fin de comprender los riesgos asociados y promover estrategias eficaces de prevención.


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_AVFLAf9c5g?si=UDMro_kr4wDBWK1L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

            
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Vía respiratoria

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La vía respiratoria constituye una de las formas más comunes, pero también más peligrosas, de transmisión de agentes biológicos en diversos entornos, incluyendo hospitales, laboratorios, centros de atención y espacios públicos. Esta vía implica la inhalación de aerosoles, gotículas o partículas suspendidas en el aire que contienen microorganismos patógenos capaces de causar enfermedades como tuberculosis, gripe, COVID-19 o legionelosis (World Health Organization [WHO], 2020).
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/3.png', alt='')
    
    p.mb-5(data-aos="fade-left") La eficiencia de transmisión depende, en gran medida, del tamaño de las partículas: las menores a 5 micras tienen la capacidad de alcanzar los alveolos pulmonares, lo que incrementa significativamente el riesgo de infecciones graves (Tellier et al., 2019).


    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Tabla 1. Transmisión aérea: aspectos técnicos relevantes.

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Aspectos técnicos
            th.bg-color-tabla.text-white Descripción

        tbody
          tr
            td Tamaño de partículas
            td Menores a 5 micras alcanzan los alveolos y provocan infecciones pulmonares severas.

          tr
            td Ejemplos de enfermedades transmitidas
            td Tuberculosis, gripe, COVID-19, legionelosis.

          tr
            td Factores ambientales
            td Humedad, temperatura, calidad del aire, ventilación.

          tr    
            td Riesgo elevado en
            td Personal de salud, laboratorio, limpieza.

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Equipos de Protección Respiratoria (EPR) como mascarillas N95, respiradores adecuados y sistemas de ventilación eficientes, son fundamentales. Su uso correcto, combinado con medidas de control ambiental, reduce significativamente la probabilidad de contagio. Ambientes cerrados y mal ventilados aumentan el riesgo, al favorecer la acumulación de partículas infecciosas en el aire. Por ello, se recomienda el uso de sistemas con filtros HEPA, ventilación natural mediante apertura de ventanas y extractores de aire.
    
        .bg-color-7.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, la adopción de protocolos de higiene respiratoria, como cubrirse la boca y nariz al toser o estornudar, y la educación en el uso adecuado del EPR, son prácticas esenciales en todos los contextos. La sensibilización sobre su importancia protege tanto al personal como a los pacientes y a la comunidad en general. En paralelo, la investigación avanza hacia tecnologías como purificadores de aire avanzados, barreras físicas en áreas de alto riesgo, y sistemas de monitoreo en tiempo real para detectar concentraciones elevadas de patógenos en el aire.
    

    p.mb-5(data-aos="fade-left") Finalmente, la vigilancia epidemiológica constante y la evaluación del riesgo en distintos entornos permiten ajustar las medidas de prevención, garantizando una protección eficaz y adaptada. La colaboración entre instituciones, profesionales y comunidad es clave para reducir la transmisión por vía respiratoria y proteger la salud pública.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Vía dérmica

    .row.mb-5
      .col-lg-8
        .bg-color-8.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Aunque menos común que otras rutas de infección como la respiratoria, gastrointestinal o parenteral, la vía dérmica representa una amenaza significativa en contextos clínicos, laborales y comunitarios. La piel, en condiciones normales, actúa como una barrera física y biológica eficaz, impidiendo la entrada de agentes patógenos. Sin embargo, esta protección puede verse comprometida por heridas, abrasiones, quemaduras, úlceras o afecciones dermatológicas como eccema o dermatitis.

          p(data-aos="fade-left") Cuando la integridad cutánea se altera, microorganismos como Staphylococcus aureus (incluyendo cepas resistentes como el MRSA) o virus como el de la viruela del mono pueden ingresar al organismo (ECDC, 2022). Estas brechas permiten la colonización o infección de tejidos subyacentes, aumentando el riesgo de infecciones graves o septicemias.
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-gradiente-7.mb-0
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Lesiones cutáneas
              p.mb-0.text-center Cortes, quemaduras, abrasiones, úlceras, eccemas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Agentes patógenos comunes
              p.mb-0.text-center Staphylococcus aureus, MRSA, virus de la viruela del mono.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Entornos de riesgo
              p.mb-0.text-center Hospitales, laboratorios, contacto con animales, residuos o materiales biológicos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Profesiones afectadas
              p.mb-0.text-center Personal de salud, veterinarios, investigadores, manipuladores de residuos.



    .row.mb-5
      .col-lg-2
        figure
          img(src="@/assets/curso/tema1/11.svg", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left").mb-4 En entornos de exposición frecuente a agentes infecciosos, incluso microabrasiones inadvertidas pueden servir como puerta de entrada para patógenos. Este riesgo se ve amplificado durante brotes epidémicos o pandemias, donde el contacto con superficies o materiales contaminados aumenta. En tales contextos, la higiene de la piel y la protección adecuada son medidas clave para evitar infecciones localizadas o sistémicas.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-4 Los profesionales expuestos deben adoptar prácticas rigurosas de higiene y protección. El uso de equipos de protección personal (EPP) —como guantes de nitrilo o látex, batas impermeables, mascarillas, gafas y protectores faciales— es esencial para prevenir la penetración de microorganismos, incluso a través de piel aparentemente intacta.

          p(data-aos="fade-left").mb-0 Asimismo, protocolos estrictos de higiene, incluyendo el lavado frecuente y correcto de manos y equipos, así como la desinfección de superficies y materiales de trabajo, reducen significativamente la probabilidad de infección dérmica (Barrett & Moriarty, 2021).


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Vía parenteral

    .row.mb-5
      .col-lg-8
        .bg-color-3.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La vía parenteral implica la introducción de agentes infecciosos directamente en el organismo mediante procedimientos que evitan el tracto digestivo, como el uso de agujas, jeringas u objetos punzocortantes que penetran la piel o las mucosas. Esta vía es especialmente crítica, ya que permite el ingreso directo del patógeno al torrente sanguíneo o a tejidos internos, facilitando su rápida diseminación y aumentando la eficiencia de transmisión.
        
        p(data-aos="fade-left") Este mecanismo puede darse tanto de forma accidental —como en pinchazos en personal sanitario o cortes con materiales contaminados— como de forma intencional, por ejemplo, en el uso compartido de agujas en contextos de drogadicción o en prácticas médicas inseguras.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-gradiente-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/13.png', alt='')
    
    
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modo de entrada
                p.text-center Inoculación directa mediante agujas, jeringas, objetos punzocortantes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Riesgos principales
                p.text-center Evita barreras inmunológicas naturales; permite la diseminación rápida de patógenos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Entornos frecuentes
                p.text-center Hospitales, laboratorios, consumo de drogas, procedimientos invasivos inseguros.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Agentes comunes transmitidos
                p.text-center VIH, Hepatitis B (VHB), Hepatitis C (VHC).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Consecuencias clínicas
                p.text-center Infecciones crónicas, inmunodeficiencia, cirrosis, cáncer hepático.

    p.mb-5(data-aos="fade-left") Entre los virus más relevantes transmitidos por esta vía destacan:

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg
            ul.lista-ul--color.color-dark.mb-4
              li.mb-3
                i.fas.fa-arrow-circle-right
                | VIH: causa inmunodeficiencia progresiva.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | VHB y VHC: responsables de infecciones hepáticas crónicas que pueden evolucionar a cirrosis o carcinoma hepatocelular.

            p(data-aos="fade-left").mb-0 Estos virus suelen transmitirse en situaciones con exposición a sangre o fluidos corporales contaminados, en especial donde no se aplican medidas estándar de bioseguridad.
            
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 400px").mx-auto


    h2 Prevención y control

    p(data-aos="fade-left").mb-5 La vacunación contra la hepatitis B es la estrategia más efectiva y ampliamente adoptada. No obstante, para el VIH y el VHC no existen vacunas, lo que hace imprescindible la adopción de medidas complementarias:


    .row.mb-5
      .col-lg-8
        .bg-color-12.px-4.py-5(data-aos="fade-left").mb-0
          ul.lista-ul--color.color-dark.mb-0
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Uso de agujas con sistemas de seguridad (retráctiles, con bloqueo).
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Capacitación continua en técnicas asépticas y manejo de objetos punzocortantes.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Protocolos estrictos para la eliminación segura de residuos biológicos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Campañas educativas que desincentiven el uso compartido de jeringas y promuevan prácticas seguras.

        .bg-color-8.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 A nivel de salud pública, la vigilancia epidemiológica y la identificación rápida de casos permiten implementar medidas de control oportunas. La colaboración entre instituciones sanitarias, laboratorios y organismos internacionales fortalece la prevención, mejora el acceso a vacunas y tratamientos, y protege a poblaciones vulnerables.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in").mb-4.mb-lg-0


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Vía gástrica


    p(data-aos="fade-left").mb-5 La vía gástrica es uno de los principales mecanismos de ingreso de agentes patógenos al organismo, especialmente a través de la ingesta de alimentos o agua contaminados con bacterias, virus, parásitos o toxinas microbianas. Su relevancia clínica y epidemiológica reside en su papel central en la transmisión de enfermedades alimentarias, una carga significativa para la salud pública a nivel mundial.

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg
            p(data-aos="fade-left").mb-4 Entre las enfermedades más representativas de esta vía se encuentran:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Salmonelosis (Salmonella spp.): Puede variar desde cuadros leves hasta septicemias graves.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Infección por Escherichia coli: Riesgo de complicaciones como el síndrome urémico hemolítico.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Cólera (Vibrio cholerae): Provoca deshidratación severa y puede resultar mortal si no se trata a tiempo.
            
          .col-lg-auto
            img(src="@/assets/curso/tema1/21.svg", style="max-width: 400px").mx-auto

    p(data-aos="fade-left").mb-5 A continuación, se presentan los principales aspectos que caracterizan la transmisión por vía gástrica, los cuales permiten comprender mejor su funcionamiento y los factores de riesgo asociados:


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Vía de ingreso
              p.mb-0 Ingesta de alimentos o agua contaminados.
    
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Patógenos comunes
              p.mb-0 Salmonella spp., E. coli, Vibrio cholerae.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Productos alimenticios de riesgo
              p.mb-0 Ingesta de alimentos o agua contaminados.
    
      .col-lg-6
        .bg-color-9.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Mecanismos de defensa del cuerpo
              p.mb-0 Salmonella spp., E. coli, Vibrio cholerae.
    
              
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/26.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") A pesar de que el ácido gástrico actúa como defensa natural, varios patógenos han desarrollado mecanismos de adaptación que les permiten sobrevivir en ambientes ácidos. Estos incluyen la regulación del pH intracelular, la producción de proteínas de choque térmico y la modificación de sus membranas (Jay et al., 2005), facilitando su capacidad infecciosa en el tracto gastrointestinal.

    h2 Medidas de prevención y control

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La prevención de enfermedades transmitidas por vía gástrica depende directamente de las condiciones higiénico-sanitarias en toda la cadena alimentaria. Esto incluye desde la producción hasta el consumo final:
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-4
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Higiene en la manipulación de alimentos: Preparación, almacenamiento y cocción adecuada.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Cocción correcta: Alcanzar temperaturas que eliminen los microorganismos patógenos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Tratamiento del agua potable: Cloración, filtración y uso de desinfectantes eficaces.

        p(data-aos="fade-left").mb-0 Además, es esencial promover la educación sanitaria:
          
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")


          
          
    .bg-full-width.bg-gradiente-7.mb-0
      .px-4.px-md-5.py-4

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/28.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Lavado frecuente de manos, especialmente antes de manipular alimentos y después de ir al baño.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/29.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Limpieza rigurosa de utensilios y superficies de trabajo.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/30.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Programas de vigilancia y control alimentario a lo largo de la cadena de producción.

    
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/31.svg", style="max-width: 400px").mx-auto

          .col-lg
            p(data-aos="fade-left").mb-4 Las políticas públicas también son fundamentales para regular y supervisar la producción y comercialización de alimentos. Entre las medidas más relevantes se encuentran:
            ul.lista-ul--color.color-dark.mb-4
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Certificación de buenas prácticas de manufactura.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Inspecciones sanitarias periódicas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Promoción de métodos seguros de conservación de alimentos.
            

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Vía enteral

    .row.mb-5
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La vía enteral es un mecanismo por el cual agentes infecciosos ingresan al organismo a través del sistema gastrointestinal, específicamente mediante el contacto con mucosas de la boca, garganta o intestino. Esta transmisión ocurre generalmente mediante manos contaminadas, objetos o superficies infectadas (fómites), sin que sea necesaria una ingestión directa de alimentos o líquidos.
    
        p(data-aos="fade-left") A diferencia de la vía gástrica, que se limita a la ingestión, la vía enteral incluye también la exposición intestinal a través del contacto indirecto. Este matiz es clave para entender la transmisión de ciertos virus y parásitos, como el norovirus, capaz de causar gastroenteritis tras el contacto con superficies contaminadas en espacios con higiene deficiente (guarderías, hospitales, residencias, etc.): 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")


    .bg-full-width.bg-gradiente-7.mb-0
      .px-4.px-md-5.py-4

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/34.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Modo de ingreso
              p.mb-0.text-center Contacto con mucosas por fómites o manos contaminadas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/35.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Patógenos comunes
              p.mb-0.text-center Salmonella, Shigella, E. coli patógena, norovirus, rotavirus, Giardia lamblia, E. histolytica.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/36.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Ambientes de alto riesgo
              p.mb-0.text-center Guarderías, residencias geriátricas, hospitales, centros de atención con higiene limitada.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/37.svg"
                alt=""
                style="width: 90px"
              )
              h5.mb-2.text-center Característica distintiva
              p.mb-0.text-center No siempre involucra ingestión directa de alimentos o agua.
        
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4.text-white
        p(data-aos="fade-left").mb-0 La eficacia de los patógenos para adherirse a mucosas y su capacidad de supervivencia en el ambiente favorecen su propagación, aumentando el riesgo de brotes epidémicos si no se implementan medidas de control adecuadas.


    h2 Prevención y control

    p(data-aos="fade-left").mb-5 El control de la transmisión enteral se basa principalmente en prácticas de higiene rigurosas:


    .bg-full-width.bg-color-10.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/38.svg", style="max-width: 400px").mx-auto

          .col-lg

            ul.lista-ul--color.color-dark.mb-4
              li.mb-3
                i.fas.fa-arrow-circle-right
                | Lavado de manos correcto y frecuente con agua y jabón, especialmente tras usar el baño y antes de manipular alimentos.
              li.mb-3
                i.fas.fa-arrow-circle-right
                | Desinfección de superficies y utensilios, sobre todo en espacios cerrados y compartidos.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Educación sanitaria para promover buenos hábitos de higiene personal y alimentaria.
            

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        p(data-aos="fade-left").mb-4 Además, el uso de guantes, mascarillas y protocolos de limpieza estrictos en situaciones de riesgo, así como la implementación de medidas de vigilancia epidemiológica, ayudan a detectar y prevenir brotes.
            


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.paho.org" target="_blank" rel="noopener noreferrer") Rothman, K. J., Greenland, S., & Lash, T. L. (2017). Modern Epidemiology (4th ed.). Wolters Kluwer. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=uFasUFGbpfg" target="_blank" rel="noopener noreferrer") RevistaMSP. (2022, 6 de agosto). #CápsulaInformativa | Tipos de trasmisión de enfermedades infecciosas [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
