import React from 'react'

import one from "/public/multi_espacio/1.png"
import one_two from "/public/multi_espacio/1.2.png"
import one_three from "/public/multi_espacio/1.3.png"

import two from "/public/multi_espacio/2.png"
import two_two from "/public/multi_espacio/2.1.png"

import three from "/public/multi_espacio/3.png"
import three_two from "/public/multi_espacio/3.1.png"

import four from "/public/multi_espacio/2.png"
import four_two from "/public/multi_espacio/4.1.png"

import five from "/public/multi_espacio/6.png"
import five_two from "/public/multi_espacio/5.1.png"

import six from "/public/multi_espacio/6.png"
import six_two from "/public/multi_espacio/6.1.png"

import seven from "/public/multi_espacio/7.png"

import eigth from "/public/multi_espacio/8.png"
import eigth_two from "/public/multi_espacio/8.1.png"


function MultiEspacio() {
  return (
    <div className='bg-multi-espacio w-full flex flex-col items-center justify-center mt-20'>
       
    {/* Primer conjunto de imágenes */}
    <div className='relative mb-20 mt-20'>
      <img src={one} className='w-auto h-auto' />
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2'>
        <img src={one_two} className='md:w-3/5 w-4/5 h-auto' />
        <img src={one_three} className='md:w-3/5 w-4/5 h-auto mt-10' />
      </div>
    </div>

    {/* Segundo conjunto de imágenes */}
    <div className='relative '>
            {/* Imagen 1*/}
            {/* Imagen de fondo */}
            <img src={two} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}

              {/* Texto */}
              <p className='font-light text-customBlue4 opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none text-center mx-auto' >
                El <strong>Multiespacio de Desarrollo Personal (M.D.P)</strong> <br />
                es mucho más que un simple lugar físico; es la <br />
                encarnación de la conexión entre lo abstracto <br />
                y lo concreto en el mundo del desarrollo <br />
                personal, profesional y espiritual. Somos seres <br />
                que fusionan estos dos mundos de manera <br />
                perfecta, como si hubiéramos sido diseñados <br />
                para extraer lo mejor de cada unirver y <br />
                transformarlo en una obra de arte viviente.
              </p>
            </div>
    </div>

    <div className='relative mb-20'>
      <img src={two_two} className='md:w-4/6 w-5/6 h-auto mx-auto' alt="Imagen de fondo" />
    </div>  

    {/* Tercera conjunto de imágenes */}
    <div className='relative '>
            {/* Imagen 1*/}
            {/* Imagen de fondo */}
            <img src={three} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}

              {/* Texto */}
              <p className='font-semibond text-customBlue opacity-80 xl:text-medium lg:text-3xl md:text-lg text-xs italic leading-none text-center mx-auto' >
                El M.D.P es el taller de las buenas ideas, el espacio <br />
                donde lo inmaterial cobra forma y se manifiesta en <br />
                el mundo tangible. Es el lugar donde las semillas de <br />
                las ideas son plantadas, donde la creatividad se <br />
                convierte en actividad, y donde las conexiones entre <br />
                las personas dan lugar a nuevas posibilidades y <br />
                experiencias transformadoras.
              </p>
            </div>
    </div>

    <div className='relative flex justify-end mb-20'>
      <img src={three_two} className='md:w-4/6 w-full h-auto' alt="Imagen de fondo" />
    </div>

    {/* Cuarta conjunto de imágenes */}
    <div className='relative items-end mb-10'>
      <img src={four_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
    </div>

    <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={four} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}

              {/* Texto */}
              <p className='font-semibond text-customBlue  opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none text-center mx-auto' >
                En este juego de polaridades, donde lo <br />
                abstracto y lo concreto se entrelazan para <br />
                crear causas y efectos, nace el M.D.P. <br />
                Es una metáfora que representa este <br />
                vínculo esencial entre ambos mundos, un <br />
                lugar donde las ideas se incuban, se <br />
                comparten y se materializan en formas <br />
                diversas.
              </p>
            </div>
    </div>

    {/* Quinta conjunto de imágenes */}
    <div className='relative  '>
            {/* Imagen de fondo */}
            <img src={five} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}

              {/* Texto */}
              <p className='font-semibond text-white opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none text-center mx-auto' >
                A través del M.D.P, ofrecemos un espacio <br />
                físico donde las peronas pueden explorar <br />
                su <strong>crecimiento personal</strong>, nutrir sus ideas y <br />
                participar en actiidades que fomentan la <br />
                autoexploración y el desarrollo interior. <br />
                Desde talleres de autonocomiento hasta <br />
                charlas inspiradoras y grupos de debate, el <br />
                M.D.P es un escenario vibrante donde la <br />
                comunidad se reúne para aprender, crecer y <br />
                compartir experiencias.
              </p>
            </div>
    </div>

    <div className='relative flex justify-end mb-20'>
      <img src={five_two} className='md:w-full w-full h-auto' alt="Imagen de fondo" />
    </div>

     {/* Sexta conjunto de imágenes */}
     <div className='relative'>
            {/* Imagen de fondo */}
            <img src={six} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}

              {/* Texto */}
              <p className='font-semibond text-white opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none text-center mx-auto' >
                Te invitamos a unirte a nuestra comunidad <br />
                en el M.D.P y comenzar tu propio viaje de <br />
                crecimiento personal. Descubre cómo <br />
                nuestras actividades, recursos y servicios <br />
                pueden insprarte y empoderarte en tu <br />
                búsqueda de <strong>autorrealización</strong> y <strong>binestar</strong>.
              </p>
            </div>
      </div>

      <div className='relative flex justify-end mb-20'>
        <img src={six_two} className='md:w-full w-full h-auto' alt="Imagen de fondo" />
      </div>

      {/* Septima conjunto de imágenes */}
      <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={seven} className='md:w-5/6 w-full h-auto mx-auto mb-10' alt="Imagen de fondo" />

            <p className='text-center font-semibold text-white opacity-80 md:text-medium text-lg '>
            entrenandomentesmdp@gmail.com
          </p>
      </div>

       {/* Octaba conjunto de imágenes */}
       <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={eigth} className='w-full h-auto mx-auto mb-10' alt="Imagen de fondo" />
            <img src={eigth_two} className='md:w-2/6 w-full h-auto mx-auto m-20' alt="Imagen de fondo" />          
      </div>
      
    


    </div>
  )
}

export default MultiEspacio