import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProjectsAll from './pages/ProjectsAll/ProjectsAll';
import Design from './pages/Design/Design';
import { useEffect, useState } from 'react';
import Modal from './components/UI/Modal/Modal';
import check from "./img/success.svg"
import ConsultationComp from './components/ConsultationComp/ConsultationComp';

function App() {
  const [modal, setModal] = useState(false)
  const [success, setSuccess] = useState(false)
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
        {modal && <Modal setModal={setModal}>
          <ConsultationComp setSuccess={setSuccess} setModal={setModal} />
        </Modal>}
        {success && <Modal setModal={setSuccess} >
          <div className="modal_success">
            <div className="check">
              <img src={check} alt="" />
            </div>
            <p className='modal_title'>
              Успешное оформление заявки!
            </p>
            <p className='modal_text'>
              После отправки заявки, сотрудники компании свяжутся с вами в скором времени
            </p>
          </div>
        </Modal>}
        <Header setModal={setModal} />
        <Routes>
          <Route path='/' element={<Main setModal={setModal} setSuccess={setSuccess} />} />
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
