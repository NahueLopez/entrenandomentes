import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/public/logo.png';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-white">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-24" 
            style={{ height: '100px', width: 'auto' }} 
          />
          {/* <span className="self-center text-1xl font-semibold whitespace-nowrap">Ochoa Propiedades</span> */}
        </a>
        <button
          className="mr-4 inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-white ml-6"  // Ajustado margen izquierdo y color de fondo
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          )}
        </button>

        <div className={`bg-white w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link 
                to="/" 
                className={`bg-white block py-2 px-3 md:border-0 menu-item ${location.pathname === '/' ? 'active' : ''}`} 
                aria-current="page"
                onClick={closeMenu}  // Cierra el menú al hacer clic
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/entre-libros" 
                className={`bg-white block py-2 px-3 md:border-0 menu-item ${location.pathname === '/entre-libros' ? 'active' : ''}`} 
                aria-current="page"
                onClick={closeMenu}  // Cierra el menú al hacer clic
              >
                Entre Libros
              </Link>
            </li>
            <li>
              <Link 
                to="/multi-espacio" 
                className={`bg-white block py-2 px-3 md:border-0 menu-item ${location.pathname === '/multi-espacio' ? 'active' : ''}`} 
                aria-current="page"
                onClick={closeMenu}  // Cierra el menú al hacer clic
              >
                Multi Espacio mdp
              </Link>
            </li>         
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
