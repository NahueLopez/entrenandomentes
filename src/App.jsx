import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import EntreLibros from './pages/EntreLibros.jsx';
import MultiEspacio from './pages/MultiEspacio.jsx';

import Header from './components/Header.jsx'; 
import Footer from './components/Footer.jsx'; 

function App() {
  return (
    <div>
      <Header /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entre-libros" element={<EntreLibros />} />
          <Route path="/multi-espacio" element={<MultiEspacio />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
