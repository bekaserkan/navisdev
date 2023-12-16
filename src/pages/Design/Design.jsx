import React from 'react'
import "./Design.css"
import design_photo from "../../img/baner_design.svg"
import ui from "../../img/ui.svg"
import wireframe from "../../img/wireframe.svg"
import { NavLink } from 'react-router-dom'

const Design = () => {
    return (
        <div className='design'>
            <img className='image' src={design_photo} alt="" />
            <div className="wrapper">
                <div className="wrapper_one">
                    <p className="design_title">
                        Разработка дизайна в Nevisdevs
                    </p>
                    <p className='design_text'>
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                    </p>
                    <p className="design_title">
                        Анализ конкурентов
                    </p>
                    <p className='design_text'>
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                    </p>
                    <p className="design_title">
                        Создание вайрфрейма
                    </p>
                    <img className='design_photo' src={wireframe} alt="" />
                    <p className='design_text'>
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                    </p>
                    <p className="design_title">
                        Добавление UI(шрифт, цвет, иконки)
                    </p>
                    <img className='design_photo' src={ui} alt="" />
                    <p className='design_text'>
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                        Дизайн – это не только красота, но и удобство. Можно сделать красивый сайт, пользоваться которым будет трудно. Посетители будут уходить с него, ничего не покупая (а цель любого коммерческого сайта – способствовать продажам).
                    </p>
                </div>
                <div className="wrapper_two">
                    <p className='wrapper_title'>
                        Наши услуги
                    </p>
                    <div className="wrapper_box">
                        <NavLink className="page" to="">
                            Веб-сайты
                        </NavLink>
                        <NavLink className="page" to="">
                            Мобильные приложения
                        </NavLink>
                        <NavLink className="page" to="">
                            SEO продвижение
                        </NavLink>
                        <NavLink className="page" to="">
                            CRM, LMC системы
                        </NavLink>
                        <NavLink className="page" to="">
                            Blockchain разработка
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design