import { useState, useEffect } from "react"
import Loader from "../components/Loader"


import { SiBookstack } from "react-icons/si";
import { GiNotebook } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const images = [
  { src: "/entre-libro/1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/1.2.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/2.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/3.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/5.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/6.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/6.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/7.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/7.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/8.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/9.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/10.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/11.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/11.1.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/12.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/13.webp", alt: "Imagen de fondo 1" },
  { src: "/entre-libro/13.1.webp", alt: "Imagen de fondo 1" },
]

function EntreLibros() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
        const promises = images.map(({ src }) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        
        await Promise.all(promises);
        setIsLoading(false);
    };
    
    loadImages();
}, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (

    <div className='bg-entre-libro flex flex-col items-center justify-center mt-20'>

      {/* Primer conjunto de imágenes */}
      <div className='relative mb-20'>
        <img src={images[0].src} className='md:w-3/6 w-full  h-auto mx-auto' loading="lazy"/>
        <img src={images[1].src} className='absolute inset-0 m-auto w-1/6 h-auto ' loading="lazy" />
      </div>

      {/* Segundo conjunto de imágenes */}
      <div className='relative mb-20'>
        <img src={images[2].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-semibold text-customBlue4 opacity-70  lg:text-3xl md:text-lg text-sm italic lg:leading-none leading-none'>
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
        <img src={images[3].src} className='md:w-3/6 w-full mx-auto h-auto' alt="Imagen de fondo" loading="lazy"/>
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-4xl md:text-lg text-sm italic lg:leading-none leading-none	'>
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
        <img src={images[3].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-4xl md:text-lg text-sm italic lg:leading-none leading-none'>
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
        <img src={images[4].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
        <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-white opacity-80 lg:text-4xl md:text-lg text-sm italic lg:leading-none leading-none	'>
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
        <img src={images[5].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>

        <div className='relative mt-10'>
        <img src={images[6].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>         
            <p className='text-center font-light text-customBlue4 xl:text-2xl lg:text-2xl md:text-lg text-sm italic lg:leading-none leading-none'>
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
          <img src={images[7].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>
          <p className='text-center font-light text-customBlue4 xl:text-2xl lg:text-2xl md:text-lg text-sm italic lg:leading-none leading-none'>
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
        <img src={images[8].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
       </div>

       {/* Octabo conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={images[7].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 lg:text-3xl md:text-xl text-sm italic lg:leading-none leading-none'>
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
        <img src={images[9].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
       </div>

       {/* Noveno conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={images[7].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
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
        <img src={images[10].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
       </div>

       {/* Dies conjunto de imágenes */}
       <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={images[7].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-customBlue4 lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
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
        <img src={images[11].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
       </div>

        {/* Once conjunto de imágenes */}
        <div className='mt-20 mb-20'>
        <div className='relative'>
          <img src={images[12].src} className='md:w-4/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <p className='text-center font-light text-white opacity-80 lg:text-4xl md:text-xl text-sm italic lg:leading-none leading-none'>
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
        <img src={images[13].src} className='md:w-3/6 w-full h-auto mx-auto' alt="Imagen de fondo" loading="lazy"/>
        </div>
       
        {/* Doce conjunto de imágenes */}
        <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={images[14].src} className='md:w-3/6 w-3/6 h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>

            <p className='text-center font-semibold text-white opacity-80 md:text-medium text-lg '>
              entrenandomentesmdp@gmail.com
            </p>

            <div>
              <p className='text-center font-semibold text-white opacity-80 md:text-medium text-xl mt-36  '>
                Enlaces
              </p>
              
              <div className="flex md:flex-row flex-col gap-28 mx-auto justify-center mt-10">

              <div className="flex flex-col text-center justify-center items-center transform transition-transform duration-200 hover:scale-110">
                <a
                  href="https://forms.gle/2FZnpc1tztFxbysaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <p className="text-customBlue4 text-xl">Alquiler libros</p>
                  <SiBookstack className="text-customBlue4 mr-2 w-40 h-40" />
                </a>
              </div>


                <div className="flex flex-col text-center justify-center items-center transform transition-transform duration-200 hover:scale-110 hover:cursor-pointer">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Url2w30dp_pIfQIdGFsLPnW6fKBdpbdwgCU8Mfi5WGM/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <p className="text-customBlue4 text-xl">Stock de libros</p>
                    <GiNotebook className="text-customBlue4 mr-2 w-40 h-40"/>
                  </a>
                </div>

                <div className="flex flex-col text-center justify-center items-center transform transition-transform duration-200 hover:scale-110 hover:cursor-pointer">
                  <a
                    href="https://entrelibrosmdp.mitiendanube.com/?fbclid=PAZXh0bgNhZW0CMTEAAaZXvUmvgM01MXPBFmRG-WoptdrofnajBzagSepv97fohMH5loYvQUIfPws_aem_oqW2VZKhsNxSuqSGHshiEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <p className="text-customBlue4 text-xl">Tienda nube</p>
                    <SiHomeassistantcommunitystore className="text-customBlue4 mr-2 w-40 h-40"/>
                  </a>
                </div>

              </div>
            </div>

            
        </div>

        {/* 13 conjunto de imágenes */}
        <div className='relative mb-20'>
            {/* Imagen de fondo */}
            <img src={images[15].src} className='w-3/6 h-auto mx-auto mb-10' alt="Imagen de fondo" loading="lazy"/>
            <img src={images[16].src} className='md:w-2/6 w-full h-auto mx-auto m-20' alt="Imagen de fondo" loading="lazy"/>          
        </div>

    </div>
  )
}

export default EntreLibros
