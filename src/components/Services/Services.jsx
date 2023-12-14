import React from 'react'
import "./Services.css"
import design1 from "../../img/design.svg"
import design2 from "../../img/design (1).svg"
import design3 from "../../img/design (2).svg"
import design4 from "../../img/design (3).svg"
import design5 from "../../img/design (5).svg"
import design6 from "../../img/design (4).svg"
import arrow from "../../img/arrow.svg"

const Services = () => {
    return (
        <div className='services'>
            <p className='title_text'>Предоставляем</p>
            <p className='title'>Наши услуги</p>
            <div className="services_contant">
                <div className="services_block">
                    <img src={design1} alt="" />
                    <h4 className='services_title'>UX/UI дизайн</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div className="services_block">
                    <img src={design2} alt="" />
                    <h4 className='services_title'>Веб-сайты</h4>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Адаптивка на разные платформы</p>
                    <p><div className="circle"></div> Лендинг, баннер</p>
                    <p><div className="circle"></div> Заливание на сервер</p>
                    <p><div className="circle"></div> SEO продвижение</p>
                </div>
                <div className="services_block">
                    <img src={design3} alt="" />
                    <h4 className='services_title'>Мобильные приложения</h4>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Верстка на  платформы Android, IOS</p>
                    <p><div className="circle"></div> Выведение на GooglePlay, AppStore</p>
                    <p><div className="circle"></div> Адаптика на разные устройства</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div className="services_block">
                    <img src={design4} alt="" />
                    <h4 className='services_title'>SEO продвижение</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div className="services_block">
                    <img src={design5} alt="" />
                    <h4 className='services_title'>CRM, LMS системы</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div className="services_block">
                    <img src={design6} alt="" />
                    <h4 className='services_title'>Blockchain разрабока</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
            </div>
        </div>
    )
}

export default Services