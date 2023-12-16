import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProjectsAll from './pages/ProjectsAll/ProjectsAll';
import Design from './pages/Design/Design';
import { useEffect } from 'react';

function App() {
  const location = useLocation()

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='design' element={<Design />} />
          <Route path='projects' element={<ProjectsAll />} />
          <Route path='*' element={<div className='not_found'>
            <p className='not_found_text'>
              <span className='not'>404</span> Такой страницы нет
            </p>
          </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
