import React from 'react'
import "./AboutComp.css"
import about_photo from "../../img/about_photo.svg"
import arrow from "../../img/arrow_white.svg"

const AboutComp = () => {
    return (
        <>
            <div className="title_box">
                <p className='title_text'>Компания</p>
                <p className='title'>О нас</p>
            </div>
            <div className='about_comp'>
                <img className='image' src={about_photo} alt="" />
                <div className="about">
                    <div>
                        <p className='title_text'>Компания</p>
                        <p className='title'>О нас</p>
                    </div>
                    <p className='about_text'>Наша компания осуществляет свою деятельность на территории
                        Кыргызстана и всей Центральной
                        Азии, оказывая услуги по разработке, внедрению и дальнейшему
                        сопровождению программных продуктов.
                        Спектр разрабатываемого и сопровождаемого программного
                        обеспечения очень широк и охватывает следующие сферы:a.
                        Биллинговые платежные системы разного профиля и уровня.</p>
                    <button className='button_form_two'>
                        Подробнее <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default AboutComp