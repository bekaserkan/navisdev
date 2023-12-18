import React from 'react'
import "./Footer.css"
import address from "../../img/address.svg"
import time from "../../img/time.svg"
import phone_number from "../../img/phone_number.svg"
import icon1 from "../../img/iocn_footer1.svg"
import icon2 from "../../img/iocn_footer2.svg"
import icon3 from "../../img/iocn_footer3.svg"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_block">
                    <div className="footer_box">
                        <p className='footer_title'>
                            Navisdev
                        </p>
                        <p className='text'>Наша компания
                            осуществляет свою деятельность на
                            территории Кыргызстана и всей Центральной Азии, </p>
                    </div>
                    <div className="footer_box">
                        <p className='footer_name'>
                            Компания
                        </p>
                        <div className="text_box">
                            <NavLink to="" className='text'>Направления</NavLink>
                            <NavLink to="" className='text'>Проекты</NavLink>
                            <NavLink to="" className='text'>Партенеры</NavLink>
                            <NavLink to="" className='text'>Отзывы</NavLink>
                            <NavLink to="" className='text'>Контакты</NavLink>
                        </div>
                    </div>
                    <div className="footer_box">
                        <p className='footer_name'>
                            Контакты
                        </p>
                        <div className="address">
                            <p className='address_text'>
                                <img src={address} alt="" />
                                г. Бишкек, ул. Манас 60/1
                            </p>
                            <p className='address_text'>
                                <img src={time} alt="" />
                                с 10:00 до 19:00, Пн-Сб
                            </p>
                            <p className='address_text'>
                                <img src={phone_number} alt="" />
                                +996 502 800 202
                            </p>
                        </div>
                    </div>
                    <div className="footer_box">
                        <p className='footer_name'>
                            Соцсети
                        </p>
                        <div className="image_box">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                        </div>
                    </div>
                </div>
                <p className='footer_text'>Все права защищены</p>
            </div>
        </div>
    )
}

export default Footer