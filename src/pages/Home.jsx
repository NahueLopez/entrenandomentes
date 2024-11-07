  import Loader from '../components/Loader';
  import { useState, useEffect } from 'react';

  const images = [
    { src: "/home/1.webp", alt: "Imagen de fondo 1" },
    { src: "/home/1.2.webp", alt: "Imagen de fondo 1.2" },
    { src: "/home/2.webp", alt: "Imagen de fondo 2" },
    { src: "/home/3.webp", alt: "Imagen de fondo 3" },
    { src: "/home/3.2.webp", alt: "Imagen de fondo 3.2" },
    { src: "/home/4.webp", alt: "Imagen de fondo 4" },
    { src: "/home/5.webp", alt: "Imagen de fondo 5" },
    { src: "/home/6.webp", alt: "Imagen de fondo 6" },
    { src: "/home/7.webp", alt: "Imagen de fondo 7" },
    { src: "/home/7.2.webp", alt: "Imagen de fondo 7.2" },
    { src: "/home/8.webp", alt: "Imagen de fondo 8" },
    { src: "/home/8.1.webp", alt: "Imagen de fondo 8.1" },
    { src: "/home/8.2.webp", alt: "Imagen de fondo 8.2" },
    { src: "/home/8.3.webp", alt: "Imagen de fondo 8.3" },
    { src: "/home/9.webp", alt: "Imagen de fondo 9" },
    { src: "/home/10.webp", alt: "Imagen de fondo 10" },
    { src: "/home/11.webp", alt: "Imagen de fondo 11" },
    { src: "/home/12.webp", alt: "Imagen de fondo 12" },
    { src: "/home/12.1.webp", alt: "Imagen de fondo 12.1" },
  ];

    function Home() {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
          const timeout = setTimeout(() => setIsLoading(false), 1000); // 2 segundos de retraso
          return () => clearTimeout(timeout); // Limpia el timeout al desmontar el componente
        }, []);
      
        if (isLoading) {
          return <Loader/>;
        }
        return (
          <div className='bg-home flex flex-col items-center justify-center mt-20'>

            {/* Primer conjunto de imágenes */}
            <div className='flex flex-col items-center text-center mt-10 md:mt-20 mb-20'>
              <img src={images[0].src} className='w-4/6  h-auto' alt="Imagen de fondo" loading="lazy"/>
              <p className='text-center font-light text-customBlue4 opacity-90 lg:text-4xl md:text-4xl text-lg italic lg:leading-none leading-none	 mt-4 mb-4'>
                Un Viaje hacia el Autoconocimiento y el <br />
                Crecimiento Personal
              </p>
              <img src={images[1].src} className='w-auto h-auto' alt="Imagen de fondo" loading="lazy"/>
            </div>

            {/* Segundo conjunto de imágenes */}
            <div className='relative'>  
              <img src={images[2].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
              <div className='absolute inset-0 flex items-center justify-center p-4'>
                <p className='text-center font-light text-white opacity-70 lg:text-4xl md:text-3xl  text-base  italic lg:leading-none leading-none'>
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
              <img src={images[3].src} className='w-full h-auto' alt="Imagen de fondo" loading="lazy"/>
              <div className='relative'>
                <img src={images[4].src} className='md:w-3/6 w-full h-auto ml-auto' alt="Imagen de fondo" loading="lazy"/>
                <div className='absolute right-0  top-0 bottom-0 flex items-center justify-center p-4 md:mr-4'>
                  <p className='text-start font-light text-customBlue4 opacity-90 xl:text-3xl lg:text-2xl md:text-lg text-sm italic leading-none	lg:leading-none' >
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
              <img src={images[5].src} className='md:w-5/6 mx-auto h-auto' alt="Imagen de fondo" loading="lazy"/>
              <div className='absolute inset-0 flex items-center justify-center p-4'>
                <p className=' font-light text-customBlue4 opacity-90 xl:text-4xl lg:text-3xl md:text-lg text-base italic leading-none'>
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
              <img src={images[6].src} className='md:w-5/6 h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
              <div className='absolute inset-0 flex items-center justify-center p-4'>
                <p className=' font-light text-customBlue4 opacity-90 xl:text-4xl lg:text-3xl md:text-lg text-base italic leading-none'>
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
              <img src={images[7].src} className='md:w-3/5 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
            </div>

            {/* Septimo conjunto de imágenes */}
            <div className='relative mb-20'>
              {/* Imagen de fondo */}
              <img src={images[8].src} className='md:w-5/6 mx-auto h-[400px] md:h-full' alt="Imagen de fondo" loading="lazy"/>

              {/* Contenedor absoluto para el título y el texto */}
              <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
                {/* Título (Imagen seven_two) */}
                <img src={images[9].src} className='w-2/5 h-auto mb-4' alt="Título" loading="lazy"/>

                {/* Texto */}
                <p className='font-light text-white opacity-80 xl:text-4xl lg:text-3xl md:text-lg text-base italic leading-none	lg:leading-none text-center mx-auto' >
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
              <img src={images[10].src} className='md:w-4/6 md:h-auto w-full h-[200px] mx-auto' alt="Imagen de fondo" loading="lazy"/>

              {/* Contenedor absoluto para el título y el texto */}
              <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
                {/* Título (Imagen seven_two) */}
                <img src={images[12].src} className='w-2/5 h-auto mb-4' alt="Título" loading="lazy"/>

                {/* Texto */}
                <p className='font-light text-customBlue4 opacity-80 xl:text-3xl lg:text-2xl md:text-lg text-sm italic leading-none md:text-start text-center mx-auto' >
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
              <img src={images[11].src} className='md:w-4/6 md:h-auto w-full h-[200px] mx-auto' alt="Imagen de fondo" loading="lazy"/>

              {/* Contenedor absoluto para el título y el texto */}
              <div className='absolute inset-0 flex flex-col items-center justify-center p-4 '>
                {/* Título (Imagen seven_two) */}
                <img src={images[13].src} className='w-2/5 h-auto mb-4' alt="Título" loading="lazy"/>

                {/* Texto */}
                <p className='font-light text-customBlue4 opacity-80 xl:text-3xl lg:text-2xl md:text-lg text-sm italic leading-none md:text-start text-center mx-auto' >
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
              <img src={images[14].src} className='md:w-3/5 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
            </div>

            {/* Decimo conjunto de imágenes */}
            <div className='relative mb-20'>
              <img src={images[15].src} className='w-auto h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
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
              <img src={images[16].src} className='md:w-4/6 w-3/6 h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>

              <p className='text-center font-semibold text-white opacity-80 md:text-medium text-lg mb-20'>
              entrenandomentesmdp@gmail.com
            </p>
            </div>

            {/* Doce conjunto de imágenes */}
            <div className='relative mb-20'>
              {/* Imagen de fondo */}
              <img src={images[17].src} className='w-auto h-auto mx-auto mb-10' alt="Imagen de fondo mb-20" loading="lazy"/>
              <img src={images[18].src} className='md:w-1/6 w-3/6 h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>
            </div>

          </div>
        )
      }
      
  export default Home