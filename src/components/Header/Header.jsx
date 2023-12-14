import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/" className="title">Navisdev</NavLink>
            <div className="pages">
                <NavLink to="/" className="page">Направления</NavLink>
                <NavLink to="/" className="page">Проекты</NavLink>
                <NavLink to="/" className="page">Партнеры</NavLink>
                <NavLink to="/" className="page">Отзывы</NavLink>
                <NavLink to="/" className="page">Контакты</NavLink>
            </div>
            <NavLink to="/" className="cons">Консультация</NavLink>
        </div>
    )
}

export default Header