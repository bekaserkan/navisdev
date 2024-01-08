import React from 'react'
import "./Event.css"
import { useNavigate } from 'react-router-dom'
import photo from "../../img/photo_team.svg"
import calendar from "../../img/calendar-three.svg"
import address from "../../img/address.svg"
import time from "../../img/time.svg"

const Event = () => {
    const navigate = useNavigate()

    return (
        <div className='event'>
            <p className="title_event">
                Мероприятия
            </p>
            <div className="boxs">
                <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/event-detail/1")} className="box">
                    <div className="cate">
                        <img className='image' src={photo} alt="" />
                    </div>
                    <p className="title_box">Middle Frontend разработчик  </p>
                    <div className="line"></div>
                    <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    <div className="detail">
                        <div className="flex">
                            <img src={calendar} alt="" />
                            <p>31.12.2023</p>
                        </div>
                        <div className="flex">
                            <img src={time} alt="" />
                            <p>10:00</p>
                        </div>
                        <div className="flex">
                            <img src={address} alt="" />
                            <p>г. Бишкек, ул. Манас 60/1</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                    <div className="cate">
                        <img className='image' src={photo} alt="" />
                    </div>
                    <p className="title_box">Middle Frontend разработчик  </p>
                    <div className="line"></div>
                    <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    <div className="detail">
                        <div className="flex">
                            <img src={calendar} alt="" />
                            <p>31.12.2023</p>
                        </div>
                        <div className="flex">
                            <img src={time} alt="" />
                            <p>10:00</p>
                        </div>
                        <div className="flex">
                            <img src={address} alt="" />
                            <p>г. Бишкек, ул. Манас 60/1</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                    <div className="cate">
                        <img className='image' src={photo} alt="" />
                    </div>
                    <p className="title_box">Middle Frontend разработчик  </p>
                    <div className="line"></div>
                    <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    <div className="detail">
                        <div className="flex">
                            <img src={calendar} alt="" />
                            <p>31.12.2023</p>
                        </div>
                        <div className="flex">
                            <img src={time} alt="" />
                            <p>10:00</p>
                        </div>
                        <div className="flex">
                            <img src={address} alt="" />
                            <p>г. Бишкек, ул. Манас 60/1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event