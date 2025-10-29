<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Cadena epidemiológica de la enfermedad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-5
      .col-lg-8
        .bg-color-10.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La cadena epidemiológica es un modelo conceptual clave en epidemiología que describe sistemáticamente cómo se desarrolla y propaga una enfermedad infecciosa de un huésped a otro. Este modelo no solo permite entender el inicio y mantenimiento de una epidemia, sino que también señala los puntos críticos donde pueden implementarse intervenciones para prevenir o detener la transmisión. Comprender profundamente cada uno de sus componentes permite diseñar estrategias integradas, focalizadas y eficaces para reducir la incidencia y propagación de enfermedades transmisibles.
    
        p(data-aos="fade-left") Esta cadena está compuesta por seis eslabones interrelacionados: agente etiológico, reservorio, puerta de salida, vía de transmisión, puerta de entrada y huésped susceptible. La interrupción de cualquiera de estos puede romper el ciclo de transmisión: 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
    


    .bg-full-width.bg-color-info.mb-0
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 868px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="25%" y="17%" numero="+")
                h5 Agente etiológico

                p Es el microorganismo o entidad biológica responsable de causar la enfermedad: bacterias, virus, hongos, parásitos o priones. Sus características —virulencia, infectividad, resistencia ambiental, capacidad de mutación y mecanismos de supervivencia— influyen en su potencial epidémico (Mandell, Douglas & Bennett, 2015). 

                p #[b Ejemplo:] el virus SARS-CoV-2, causante de la COVID-19, cuya alta transmisibilidad y capacidad de mutación facilitaron su propagación mundial.
    
              .bg-color-white.box-shadow.p-3(x="21%" y="48%" numero="+")
                h5 Reservorio

                p  Es el hábitat natural donde el agente vive, se multiplica y mantiene: puede ser humano, animal o un medio inanimado como el suelo o el agua. 

                p #[b Ejemplos:] humanos (sarampión, varicela), animales (rabia en murciélagos y perros; gripe aviar en aves), ambientes (tétanos por Clostridium tetani en el suelo) (Heymann, 2015). Es importante distinguir el reservorio de fuente de infección, que es el origen inmediato de la transmisión, aunque pueden coincidir.
    
              .bg-color-white.box-shadow.p-3(x="24%" y="78.5%" numero="3")
                h5 Puerta de salida

                p Es la vía por la que el agente abandona el reservorio. En humanos puede ser: tracto respiratorio (tos, estornudos), gastrointestinal (heces, vómito), genitourinario (secreciones, orina), piel lesionada o sangre. 

                p #[b Ejemplos:] tuberculosis (tracto respiratorio), hepatitis B (sangre, fluidos). Permite identificar medidas como el uso de barreras y desinfección para limitar la diseminación (CDC, 2022).
    
              .bg-color-white.box-shadow.p-3(x="67.5%" y="15%" numero="+")
                h5 Huésped susceptible

                p Persona que, por su estado inmunológico, edad, enfermedades crónicas o falta de vacunación, es vulnerable a la infección. 

                p #[b Ejemplos:] niños, ancianos, inmunodeprimidos. Factores determinantes: inmunológicos, genéticos, ambientales. Estrategias de protección: vacunación, buena nutrición, control de comorbilidades, estilos de vida saludables (Rothman et al., 2017).


              .bg-color-white.box-shadow.p-3(x="74.5%" y="48%" numero="+")
                h5 Puerta de entrada

                p Es la vía por la que el agente ingresa al nuevo huésped: mucosas respiratorias, gastrointestinal, genitourinaria, heridas en la piel o vía parenteral. 

                p #[b Ejemplos:]  gripe (mucosas nasales), Helicobacter pylori (digestiva), VIH (mucosas genitales, sangre). La protección incluye higiene, barreras, vacunación y cuidado de heridas.

              .bg-color-white.box-shadow.p-3(x="71%" y="80%" numero="+")  
                h5 Vía de transmisión

                p Es el mecanismo por el que el agente llega al huésped. Puede ser directa (contacto físico, gotas respiratorias) o indirecta (agua, alimentos, instrumentos contaminados, vectores biológicos como mosquitos).

                p #[b Ejemplos:] contacto directo (herpes simple), aerosoles (COVID-19), fómites (superficies), vectores (dengue), transfusiones (VIH). Medidas preventivas: lavado de manos, mascarillas, control de vectores, desinfección.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p(data-aos="fade-left") La cadena epidemiológica proporciona un marco esencial para entender y actuar frente a enfermedades infecciosas. Su análisis integral permite identificar con precisión los puntos críticos donde deben aplicarse intervenciones de salud pública para cortar el ciclo de transmisión y proteger a la población.


    h2 Importancia de la cadena epidemiológica en salud pública y salud laboral

    p(data-aos="fade-left") La comprensión de la cadena epidemiológica es fundamental para el diseño e implementación de intervenciones eficaces en salud pública y salud laboral. Este modelo permite identificar los puntos de vulnerabilidad dentro del ciclo de transmisión de una enfermedad infecciosa y aplicar medidas específicas en el eslabón correspondiente para interrumpir la propagación. Durante la pandemia de COVID-19, se aplicaron diversas estrategias basadas en este modelo:




    
    .bg-full-width.bg-color-5.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 400px").mx-auto

          .col-lg

            ul.lista-ul--color.color-dark.mb-4
              li.mb-3
                i.fas.fa-arrow-circle-right
                | Vacunación masiva para proteger al huésped susceptible.
              li.mb-3
                i.fas.fa-arrow-circle-right
                | Uso de mascarillas y barreras físicas para bloquear las puertas de entrada y salida del virus.
              li.mb-3
                i.fas.fa-arrow-circle-right
                | Distanciamiento social para limitar la vía de transmisión.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Pruebas diagnósticas y aislamiento para detectar e intervenir sobre el reservorio humano.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p(data-aos="fade-left").mb-4 En el ámbito de la investigación de brotes, la cadena epidemiológica permite trazar con precisión el origen y dinámica de una enfermedad, lo cual facilita respuestas rápidas, coordinadas y eficaces. Esto es esencial para contener brotes antes de que se conviertan en epidemias o pandemias.


    .row.mb-5
      .col-lg-8
        .bg-color-11.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A nivel estratégico, este modelo aporta una visión holística y sistemática, clave para desarrollar políticas de salud pública orientadas a reducir la carga de enfermedades transmisibles. En el entorno laboral, su aplicación permite diseñar protocolos de bioseguridad, identificar puntos críticos de exposición y proteger la salud del personal expuesto a riesgos biológicos.
    

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
    
            
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span  Rothman, K. J., Greenland, S., & Lash, T. L. (2017). Modern Epidemiology (4th ed.). Wolters Kluwer.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XC6HR0T-wg8" target="_blank" rel="noopener noreferrer") Sociedad Mexicana de Virología. (2018, 10 de octubre). Los virus y las infecciones respiratorias [Vídeo]. YouTube.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2', // Cambiar X por número del tema (Tema1, Tema2, Tema3, etc.)

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'temaX' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2
      // tema3 → cuestionarios.tema3
      cuestionario: cuestionarios.tema2,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
