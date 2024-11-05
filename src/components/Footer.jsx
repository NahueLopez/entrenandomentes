import { Link, useLocation } from 'react-router-dom';
import logo from '/public/logo.png';
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="w-full shadow-md">
      <div className="p-4 md:py-8 max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              alt="Logo"
              style={{ height: '100px', width: 'auto' }}
              className="h-auto"
            />
          </Link>

          <div className="flex justify-center">
            <a href="https://www.instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className='text-customBlue4 w-16 h-6 hover:'/>
            </a>
          </div>

          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 ${location.pathname === '/' ? 'active' : ''}`}
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/entre-libros"
                className={`block py-2 px-3 ${location.pathname === '/entre-libros' ? 'active' : ''}`}
                aria-current="page"
              >
                Entre Libros
              </Link>
            </li>
            <li>
              <Link
                to="/multi-espacio"
                className={`block py-2 px-3 ${location.pathname === '/multi-espacio' ? 'active' : ''}`}
                aria-current="page"
              >
                Multi Espacio mdp
              </Link>
            </li>
          </ul>
      
        </div>
        <hr className="my-6 border-gray-700" />
        <span className="block text-sm text-black text-center font-semibold">
          © 2023 Todos los Derechos Reservados.
        </span>
      </div>
    </footer>
  );
}
