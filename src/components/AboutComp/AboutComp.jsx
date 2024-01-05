import React from 'react'
import "./AboutComp.css"
import about_photo from "../../img/about_photo.svg"
import arrow from "../../img/arrow_white.svg"
import portrait from "../../img/portrait.svg"

const AboutComp = () => {
    return (
        <>
            <div className='aboutt'>
                <div className="title_box">
                    <p className='title_text'>
                        О нас
                    </p>
                </div>
                <div className='flex'>
                    <p data-aos="fade-right" data-aos-duration="1000" className='title_about'>Мы разрабатываем лучшие цифровые продукты для вашего бизнеса</p>
                    <div data-aos="zoom-in-left" data-aos-duration="1000" className='user'>
                        <img src={portrait} alt="" />
                        <div>
                            <p className="user_title"> Тилек Бегалиев </p>
                            <p className='user_text'> Основатель </p>
                        </div>
                    </div>
                </div>
                <div className='about_gallery'>
                    <div className='grid'>
                        <img data-aos="zoom-in-right" data-aos-duration="1000" className='image' src={about_photo} alt="" />
                        <img data-aos="zoom-in-right" data-aos-duration="1000" className='image' src={about_photo} alt="" />
                    </div>
                    <img data-aos="zoom-in" data-aos-duration="1000" className='image center' src={about_photo} alt="" />
                    <div className='grid_two'>
                        <div data-aos="zoom-in-left" data-aos-duration="1000">
                            <img className='image' src={about_photo} alt="" />
                        </div>
                        <div data-aos="zoom-in-left" data-aos-duration="1000">
                            <img className='image' src={about_photo} alt="" />
                        </div>
                        <div data-aos="zoom-in-left" data-aos-duration="1000" className='image_box'>
                            <p className="box_text">
                                Больше фотографий из жизни Navisdev
                            </p>
                            <button className='button_form_two'>
                                Подробнее <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                    {/* <div className="about">
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
                </div> */}
                </div>
            </div>
        </>
    )
}

export default AboutComp