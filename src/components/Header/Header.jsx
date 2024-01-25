import React, { useEffect, useState } from 'react'
import "./Header.css"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import close from "../../img/close_modal.svg"
import logo from "../../img/Union (2).svg"

const Header = ({ setModal }) => {
    const [menu, setMenu] = useState(false)
    const [isScrolledDown, setIsScrolledDown] = useState(true);
    const navigate = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;

    //         if (currentScrollY > 180 && currentScrollY > lastScrollY) {
    //             setIsScrolledDown(true);
    //         } else {
    //             setIsScrolledDown(false);
    //         }

    //         lastScrollY = currentScrollY;
    //     };

    //     let lastScrollY = window.scrollY;

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     setIsScrolledDown(false);
    // }, [location]);

    return (
        <div style={{
            background: isScrolledDown ? "rgba(10, 10, 11, 0.20)" : "",
            backdropFilter: isScrolledDown ? "blur(4px)" : "",
            borderBottom: isScrolledDown ? "1px solid rgba(181, 181, 181, 0.2)" : ""
        }} className='header'>
            <div className="header_container">
                <div onClick={() => navigate("/")} className="title_div">
                    <img className='logo' src={logo} alt="" />
                    <NavLink to="/" className="title">Navisdevs </NavLink>
                </div>
                <div className="pages">
                    <NavLink to="/about" className="page">О нас</NavLink>
                    <NavLink to="/projects" className="page">Проекты</NavLink>
                    {/* <NavLink to="/directions" className='page'>Направления</NavLink> */}
                    <NavLink to="/event" className="page">Мероприятия</NavLink>
                    <NavLink to="/contact" className="page">Контакты</NavLink>
                </div>
                <button onClick={() => setModal(true)} className="button_form cons">Консультация</button>
                <div onClick={() => setMenu(true)} className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {menu && <div className="menu">
                    <div onClick={() => setMenu(false)} className="menu_not"></div>
                    <div className="menu_container">
                        <img onClick={() => setMenu(false)} className='close' src={close} alt="" />
                        {/* <NavLink onClick={() => setMenu(false)} to="/directions" className="page">Направления</NavLink> */}
                        <NavLink onClick={() => setMenu(false)} to="/about" className="page">О нас</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/projects" className="page">Проекты</NavLink>
                        {/* <NavLink onClick={() => setMenu(false)} to="/" className="page">Партнеры</NavLink> */}
                        <NavLink onClick={() => setMenu(false)} to="/vacancy" className="page">Вакансии</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/event" className="page">Мероприятия</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/review" className="page">Отзывы</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/contact" className="page">Контакты</NavLink>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header