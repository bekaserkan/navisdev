import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = ({ setModal }) => {
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
        </div>
    )
}

export default Header