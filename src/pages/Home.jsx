import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

import one from "/public/home/1.png"
import one_two from "/public/home/1.2.png"

import two from "/public/home/2.png"

    
import three from "/public/home/3.png"
import three_three from "/public/home/3.2.png"

import four from "/public/home/4.png"

import five from "/public/home/5.png"

import six from "/public/home/6.png"

import seven from "/public/home/7.png"
import seven_two from "/public/home/7.2.png"

import eigth from "/public/home/8.png"
import eigth_two from "/public/home/8.1.png"
import eigth_three from "/public/home/8.2.png"
import eigth_four from "/public/home/8.3.png"

import nine from "/public/home/9.png"

import ten from "/public/home/10.png"
    
import eleven from "/public/home/11.png"

import twelve from "/public/home/12.png"
import twelve_two from "/public/home/12.1.png"




    function Home() {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000); // 2 segundos de retraso
        return () => clearTimeout(timeout); // Limpia el timeout al desmontar el componente
      }, []);
    
      if (isLoading) {
        return <Loader/>;
      }
      return (
        <div className='bg-home flex flex-col items-center justify-center mt-20'>

          {/* Primer conjunto de imágenes */}
          <div className='flex flex-col items-center text-center mt-10 md:mt-20 mb-20'>
            <img src={one} className='w-auto  h-auto' alt="Imagen de fondo" loading="lazy"/>
            <p className='text-center font-light text-customBlue4 opacity-90 lg:text-extra-large md:text-4xl text-lg italic lg:leading-none leading-none	 mt-4 mb-4'>
              Un Viaje hacia el Autoconocimiento y el <br />
              Crecimiento Personal
            </p>
            <img src={one_two} className='w-auto h-auto' alt="Imagen de fondo" loading="lazy"/>
          </div>

          {/* Segundo conjunto de imágenes */}
          <div className='relative'>  
            <img src={two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
            <div className='absolute inset-0 flex items-center justify-center p-4'>
              <p className='text-center font-light text-white opacity-70 xl:text-extra-large lg:text-extra-large-2 md:text-3xl  text-base  italic lg:leading-none leading-none'>
                En nuestra búsqueda por comprender el <br />
                mundo que nos rodea, a menudo nos <br />
                encontramos con experiencias que <br />
                lingüísticas.
                <br />
                Inefable, una palabra que intenta <br />
                describir aquello que está más allá de <br />
                las palabras, nos invita a reflexionar <br />
                sobre la dualidad entre nuestras <br />
                limitaciones expresivas y el impulso <br />
                innato de comunicarnos.
              </p>
            </div>
          </div>

        {/* Tercero conjunto de imágenes */}
        <div className='mt-20 mb-20'>
            <img src={three} className='w-full h-auto' alt="Imagen de fondo" loading="lazy"/>
            <div className='relative'>
              <img src={three_three} className='md:w-5/6 w-full h-auto ml-auto' alt="Imagen de fondo" loading="lazy"/>
              <div className='absolute right-0  top-0 bottom-0 flex items-center justify-center p-4 md:mr-4'>
                <p className='text-start font-light text-customBlue4 opacity-90 xl:text-extra-large lg:text-3xl md:text-2xl text-sm italic leading-none	lg:leading-none' >
                    Entrenando Mentes no solo es una <br />
                    empresa, sino un equipo apasionado de <br />
                    individuos comprometidos con la misión <br />
                    de facilitar el autoconocimiento y el <br />
                    crecimiento personal. Nuestro equipo <br />
                    está compuesto por profesionales en <br />
                    diversas áreas, desde el desarrollo <br />
                    personal, profesional y espiritual hasta <br />
                    el emprendimiento social y la <br />
                    educación.
                  </p>

              </div>
            </div>
        </div>


          {/* Cuarto conjunto de imágenes */}
          <div className='relative mb-20'>
            <img src={four} className='w-full h-auto' alt="Imagen de fondo" loading="lazy"/>
            <div className='absolute inset-0 flex items-center justify-center p-4'>
              <p className=' font-light text-customBlue4 opacity-90 xl:text-extra-large lg:text-3xl md:text-lg text-base italic leading-none'>
                Facilitar y acompañar a las personas en <br />
                su viaje hacia el autoconocimiento y el <br />
                crecimiento personal, promoviendo un <br />
                mundo donde cada individuo pueda <br />
                alcanzar su máximo potencial y <br />
                contribuir positivamente a la sociedad.
              </p>
            </div>
          </div>

            {/* Quinto conjunto de imágenes */}
          <div className='relative mb-20'>
            <img src={five} className='w-full h-auto' alt="Imagen de fondo" loading="lazy"/>
            <div className='absolute inset-0 flex items-center justify-center p-4'>
              <p className=' font-light text-customBlue4 opacity-90 xl:text-extra-large lg:text-3xl md:text-lg text-base italic leading-none'>
                Ser una comunidad global líder en el <br />
                desarrollo personal y el bienestar, <br />
                reconocida por su compromiso con la <br />
                autenticidad, la empatía y la <br />
                colaboración, y por su impacto positivo <br />
                en la vida de las personas y las <br />
                comunidades que servimos.
              </p>
            </div>
          </div>

            {/* Sexto conjunto de imágenes */}
          <div className='relative mb-20'>
            <img src={six} className='md:w-4/5 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          </div>

          {/* Septimo conjunto de imágenes */}
          <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={seven} className='w-full h-[400px] md:h-full' alt="Imagen de fondo" loading="lazy"/>

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}
              <img src={seven_two} className='w-3/5 h-auto mb-4' alt="Título" loading="lazy"/>

              {/* Texto */}
              <p className='font-light text-white opacity-80 xl:text-extra-large lg:text-3xl md:text-lg text-base italic leading-none	lg:leading-none text-center mx-auto' >
                Entrenando Mentes fue fundado en 2019 <br />
                por Rodrigo, un apasionado del desarrollo <br />
                personal.<br/ > 
                Su experiencia mientras estudiaba PNL <br />
                (Programación Neurolingüística) lo llevó a <br />
                reconocer la importancia de compartir <br />
                experiencias positivas para el crecimiento <br />
                personal. <br />
                Comenzó llamándose Entrenador de <br />
                Mentes y con el tiempo, su visión dio paso a <br />
                la creación de Entrenando Mentes, una <br />
                plataforma dedicada a la exploración <br />
                interior y el desarrollo humano en comunidad.
              </p>
            </div>
          </div>

        {/* Octabo conjunto de imágenes */}
        <div className='relative'>
            {/* Imagen 1*/}
            {/* Imagen de fondo */}
            <img src={eigth} className='md:w-4/6 md:h-auto w-full h-[200px] mx-auto' alt="Imagen de fondo" loading="lazy"/>

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}
              <img src={eigth_three} className='w-2/5 h-auto mb-4' alt="Título" loading="lazy"/>

              {/* Texto */}
              <p className='font-light text-customBlue4 opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none md:text-start text-center mx-auto' >
                Como equipo, estamos comprometidos a <br />
                brindar recursos y espacios que promuevan <br />
                el bienestar y el crecimiento de nuestra <br />
                comunidad. Creemos en la importancia de la <br />
                colaboración, el aprendizaje continuo y el <br />
                empoderamiento personal como pilares <br />
                fundamentales para el desarrollo humano.
              </p>
            </div>
        </div>

        <div className='relative mb-20'>
            {/* Imagen 1*/}
            {/* Imagen de fondo */}
            <img src={eigth_two} className='md:w-4/6 md:h-auto w-full h-[200px] mx-auto' alt="Imagen de fondo" loading="lazy"/>

            {/* Contenedor absoluto para el título y el texto */}
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
              {/* Título (Imagen seven_two) */}
              <img src={eigth_four} className='w-2/5 h-auto mb-4' alt="Título" loading="lazy"/>

              {/* Texto */}
              <p className='font-light text-customBlue4 opacity-80 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none md:text-start text-center mx-auto' >
                En última instancia, nuestro propósito es <br />
                inspirar y acompañar a las personas en su <br />
                viaje hacia la autorrealización y la plenitud. A <br />
                través de nuestras iniciativas, esperamos ser <br />
                un faro de luz para aquellos que buscan <br />
                encontrar significado y propósito en sus <br />
                vidas.
              </p>
            </div>
        </div>

         {/* Noveno conjunto de imágenes */}
         <div className='relative mb-20'>
            <img src={nine} className='md:w-4/5 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          </div>

          {/* Decimo conjunto de imágenes */}
          <div className='relative mb-20'>
            <img src={ten} className='w-auto h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
            <div className='absolute inset-0 flex items-center justify-center p-4'>
              <p className='mt-16 md:mt-0 font-light text-white opacity-90 xl:text-medium lg:text-3xl md:text-lg text-sm italic leading-none'>
                Entrenando Mentes nos invita a reflexionar <br />
                sobre la importancia de explorar la inefable, <br />
                de buscar la conexión con nosotros mismos <br />
                y con los demás. <br />
                Esperamos que nuestra presentación haya <br />
                despertado en ustedes el deseo de <br />
                emprender su propio viaje de <br />
                autoconocimiento y crecimiento persona, <br />
                y que nos acompañen en este emocionante <br />
                viaje hacia la realización personal y colectiva.
              </p>
            </div>
          </div>

          {/* Once conjuntio de imágenes */}
          <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={eleven} className='md:w-5/6 w-full h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>

            <p className='text-center font-semibold text-white opacity-80 md:text-medium text-lg mb-20'>
            entrenandomentesmdp@gmail.com
          </p>
          </div>

          {/* Doce conjunto de imágenes */}
          <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={twelve} className=' w-auto h-auto mx-auto mb-10' alt="Imagen de fondo mb-20" loading="lazy"/>
            <img src={twelve_two} className='md:w-1/6 w-3/6 h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>
          </div>

        </div>
      )
    }
    
    export default Home