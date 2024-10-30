import React from 'react'

import one from "/public/entre-libro/1.png"
import one_two from "/public/entre-libro/1.2.png"

import two from "/public/entre-libro/2.png"

import three from "/public/entre-libro/3.png"

//import four from "/public/entre-libro/4.png"

import five from "/public/entre-libro/5.png"

import six from "/public/entre-libro/6.png"
import six_two from "/public/entre-libro/6.1.png"

import seven from "/public/entre-libro/7.png"
import seven_two from "/public/entre-libro/7.1.png"

//import eigth from "/public/entre-libro/8.png"
import eigth_two from "/public/entre-libro/8.1.png"

//import nine from "/public/entre-libro/9.png"
import nine_two from "/public/entre-libro/9.1.png"

//import ten from "/public/entre-libro/10.png"
import ten_two from "/public/entre-libro/10.1.png"

import eleven from "/public/entre-libro/11.png"
import eleven_two from "/public/entre-libro/11.1.png"

import twelve from "/public/entre-libro/12.png"

import thirteen from "/public/entre-libro/13.png"
import thirteen_two from "/public/entre-libro/13.1.png"



function EntreLibros() {
  return (
    <div className='bg-entre-libro flex flex-col items-center justify-center mt-20'>
      
      
      {/* Primer conjunto de imágenes */}
      <div className='relative mb-20'>
        <img src={one} className='md:w-5/6 w-full  h-auto mx-auto' />
        <img src={one_two} className='absolute inset-0 m-auto w-2/6 h-auto' />
      </div>

      {/* Segundo conjunto de imágenes */}
      <div className='relative mb-20'>
        <img src={two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-semibold text-customBlue4 opacity-70 xl:text-extra-large lg:text-5xl md:text-lg text-sm italic lg:leading-none leading-none'>
            El <strong>Proyecto Entre Libros</strong> se <br />
            posiciona como más que una <br />
            simple colección de libros; <br />
            es una biblioteca temática <br />
            cuidadosamente seleccionada <br />
            que abarca una amplia gama de <br />
            temas relacionados con el <br />
            <strong>autoconocimiento</strong>, el <strong>desarrollo <br />
            personal, profesional y espiritual.</strong> <br />
            <br />
            En un mundo donde el <br />
            conocimiento es poder, Entre <br />
            Libros se erige como un faro de <br />
            sabiduría y crecimiento <br />
          </p>
        </div>
      </div>

      {/* Tercer conjunto de imágenes */}
      <div className='relative'>
        <img src={three} className='md:w-5/6 w-full mx-auto h-auto' alt="Imagen de fondo" />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-extra-large md:text-lg text-sm italic lg:leading-none leading-none	'>
            Nuestra misión es fomentar la <br />
            educación y, sobre todo, la <br />
            lectura en la temática del <br />
            desarrollo personal, guiando a <br />
            las personas en su búsqueda de <br />
            conocimiento y crecimiento <br />
            interior.
          </p>
        </div>
      </div>

      {/* Cuarto conjunto de imágenes */}
      <div className='relative'>
        <img src={three} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-extra-large md:text-lg text-sm italic lg:leading-none leading-none'>
            Nos enfocamos en ser la <br />
            biblioteca más grande del <br />
            mundo en nuestra temática, <br />
            ofreciendo una amplia variedad <br />
            de recursos y materiales para el <br />
            desarrollo personal.
          </p>
        </div>
      </div>

      {/* Quinto conjunto de imágenes */}
      <div className='relative'>
        <img src={five} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-extra-large md:text-lg text-sm italic lg:leading-none leading-none	'>
            Acompañar a las personas a <br />
            través de la lectura para que <br />
            recuerden quiénes son <br />
            verdaderamente, guiándolas en <br />
            su viaje de autonocomiento y <br />
            crecimiento personal.
          </p>
        </div>
      </div>

      {/* Sexto conjunto de imágenes */}
      <div className='relative mb-20'>
        <img src={six} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />

        <div className='relative mt-10'>
        <img src={six_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>         
            <p className='text-center font-light text-customBlue4 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              Nuestra coleccion esta compuesta por una <br />
              cuidadosa selección de libros que exploran <br />
              diferentes aspectos del desarrollo humano. <br />
              Desde la psicología y la espiritualidad hasta <br />
              el liderazgo y la creatividad, nuestros <br />
              estantes rebosan de títulos que invitan a la <br />
              <strong>reflexión</strong>, la <strong>introspección</strong> y el <strong>crecimiento</strong> <br />
              <strong>personal</strong>.
            </p>
          </div> 
        </div>
      </div>

       {/* Seven conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={seven} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              Además de libros físicos, Entre Libros ofrece <br />
              una amplia variedad de <strong>recursos adicionales</strong> <br />
              para enriquecer la experiencia de los usuarios. <br />
              Audiolibros, eBooks, materiales <br />
              complementarios y recomendaciones de <br />
              lectura son solo algunas de las opciones <br />
              disponibles para aquellos que buscan <br />
              sumergirse aún más en el vasto océano del <br />
              conocimiento.
            </p>
          </div>
        </div>
        <img src={seven_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
       </div>

       {/* Octabo conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={seven} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              Pero Entre Libros no se limita a ser una <br />
              simple biblioteca estátoca; es un <strong>espacio<br />
              dinámico que fomenta la exploración y el</strong> <br />
              intercambio de ideas.<br />
              <br />
              Organizamos una <strong>variedad de actividades<br />
              y eventos</strong> relacionados con la lectura y el <br />
              desarrollo personal, como clubes de <br />
              lectura, charlas con autores, talleres de <br />
              escritura creativa y eventos de networking.
            </p>
          </div>
        </div>
        <img src={eigth_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
       </div>

       {/* Noveno conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={seven} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              Más allá de ser un repositorio de <br />
              conocimiento, Entre Libros es el <strong>punto de <br />
              encuentro</strong> de una comunidad de lectores <br />
              ávidos y buscadores de conocimiento. <br />
              Nuestra biblioteca se convierte en un lugar <br />
              de reunión donde se comparten ideas, se <br />
              debaten perspectivas y se fortalecen <br />
              <strong>conexions humanas </strong> en torno al amor por <br />
              la lectura y el crecimiento personal.
            </p>
          </div>
        </div>
        <img src={nine_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
       </div>

       {/* Dies conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={seven} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              El impacto de Entre Libros se extiende <br />
              más allá de sus estantes. Numerosos <br />
              usuarios han informado un aumento en su <br />
              <strong>bienestar </strong> y <strong>conocimiento</strong> después de <br />
              utilizar los recursos de Entre Libros, lo que <br />
              demuestra su relevancia y efectividad en <br />
              el mundo del desarrollo personal
            </p>
          </div>
        </div>
        <img src={ten_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
       </div>

        {/* Once conjunto de imágenes */}
        <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={eleven} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-white opacity-80 xl:text-extra-large lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
              Te invitamos a unirte a Entre Libros y <br />
              descubrir un mundo de conocimiento y <br />
              crecimiento personal a través de la lectura y <br />
              la comunidad. Visitá nuestra biblioteca en <br />
              línea o participá en nuestros eventos para <br />
              comenzar tu viaje de descubrimiento y <br />
              aprendizaje.
            </p>
          </div>
        </div>
        <img src={eleven_two} className='md:w-5/6 w-full h-auto mx-auto' alt="Imagen de fondo" />
        </div>
       
        {/* Doce conjunto de imágenes */}
        <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={twelve} className='md:w-5/6 w-full h-auto mx-auto mb-10' alt="Imagen de fondo" />

            <p className='text-center font-semibold text-white opacity-80 md:text-medium text-lg '>
            entrenandomentesmdp@gmail.com
          </p>
        </div>

        {/* 13 conjunto de imágenes */}
        <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={thirteen} className='w-5/6 h-auto mx-auto mb-10' alt="Imagen de fondo" />
            <img src={thirteen_two} className='md:w-2/6 w-full h-auto mx-auto m-20' alt="Imagen de fondo" />          
        </div>

    </div>
  )
}

export default EntreLibros
