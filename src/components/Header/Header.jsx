import React, { useState } from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import close from "../../img/close_modal.svg"
import logo from "../../img/logo_navis.svg"

const Header = ({ setModal }) => {
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className="header_container">
                <div onClick={() => navigate("/")} className="title_div">
                    <img className='logo' src={logo} alt="" />
                    <NavLink to="/" className="title">Navisdev </NavLink>
                </div>
                <div className="pages">
                    <NavLink to="/directions" className="page">Направления</NavLink>
                    <NavLink to="/projects" className="page">Проекты</NavLink>
                    <NavLink to="/vakance" className="page">Вакансии</NavLink>
                    <NavLink to="/review" className="page">Мероприятия</NavLink>
                    <NavLink to="/about" className="page">О нас</NavLink>
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
                        <NavLink onClick={() => setMenu(false)} to="/directions" className="page">Направления</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/projects" className="page">Проекты</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/about" className="page">О нас</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/" className="page">Партнеры</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/review" className="page">Отзывы</NavLink>
                        <NavLink onClick={() => setMenu(false)} to="/contact" className="page">Контакты</NavLink>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header