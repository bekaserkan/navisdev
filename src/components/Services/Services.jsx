import React from 'react'
import "./Services.css"
import design1 from "../../img/design.svg"
import design2 from "../../img/design (1).svg"
import design3 from "../../img/design (2).svg"
import design4 from "../../img/design (3).svg"
import design5 from "../../img/design (5).svg"
import design6 from "../../img/design (4).svg"
import { useNavigate } from 'react-router-dom'

const Services = () => {
    const navigate = useNavigate()

    return (
        <div className='services'>
            <p className='title'>
                <p className='title_text'>Предоставляем</p>
                Наши услуги
            </p>
            <div className="services_contant">
                <div data-aos="fade-up" data-aos-duration="500" onClick={() => navigate("/design")} className="services_block">
                    <img src={design1} alt="" />
                    <h4 className='services_title'>UX/UI дизайн</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="services_block">
                    <img src={design2} alt="" />
                    <h4 className='services_title'>Веб-сайты</h4>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Адаптивка на разные платформы</p>
                    <p><div className="circle"></div> Лендинг, баннер</p>
                    <p><div className="circle"></div> Заливание на сервер</p>
                    <p><div className="circle"></div> SEO продвижение</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="services_block">
                    <img src={design3} alt="" />
                    <h4 className='services_title'>Мобильные приложения</h4>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Верстка на  платформы Android, IOS</p>
                    <p><div className="circle"></div> Выведение на GooglePlay, AppStore</p>
                    <p><div className="circle"></div> Адаптика на разные устройства</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className="services_block">
                    <img src={design4} alt="" />
                    <h4 className='services_title'>SEO продвижение</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="services_block">
                    <img src={design5} alt="" />
                    <h4 className='services_title'>CRM, LMS системы</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="services_block">
                    <img src={design6} alt="" />
                    <h4 className='services_title'>Blockchain разрабока</h4>
                    <p><div className="circle"></div> Анализ конкурентов</p>
                    <p><div className="circle"></div> Вайрфрейм</p>
                    <p><div className="circle"></div> Дизайн</p>
                    <p><div className="circle"></div> Создание баннеров</p>
                    <p><div className="circle"></div> Подробка иконок и иллюстраций</p>
                </div>
            </div>
            <div className="clients">
                <div>
                    <span className='client'>98+</span>
                    <p>Довольных клиентов</p>
                </div>
                <div>
                    <span className='client'>100+</span>
                    <p>Завершенных проектов</p>
                </div>
                <div>
                    <span className='client'>25+</span>
                    <p>Сотрудников</p>
                </div>
            </div>
        </div>
    )
}

export default Services