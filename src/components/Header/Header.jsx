import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import close from "../../img/close_modal.svg"

const Header = ({ setModal }) => {
    const [menu, setMenu] = useState(false)

    return (
        <div className='header'>
            <NavLink to="/" className="title">Navisdev</NavLink>
            <div className="pages">
                <NavLink to="/directions" className="page">Направления</NavLink>
                <NavLink to="/projects" className="page">Проекты</NavLink>
                <NavLink to="/about" className="page">О нас</NavLink>
                <NavLink to="/review" className="page">Отзывы</NavLink>
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
    )
}

export default Header