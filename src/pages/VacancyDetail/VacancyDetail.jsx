import React from 'react'
import "./VacancyDetail.css"
import { useNavigate } from 'react-router-dom'
import align from "../../img/align-text-left-one.svg"
import check from "../../img/check-small.svg"
import handbag from "../../img/handbag.svg"
import cooperative from "../../img/cooperative-handshake.svg"
import file from "../../img/file-addition.svg"

const VacancyDetail = () => {
    const navigate = useNavigate()

    return (
        <div className='vacancy_detail'>
            <div className="navi">
                <svg onClick={() => navigate(-1)} className='navi_link' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <rect width="45" height="45" rx="22.5" fill="white" fill-opacity="0.04" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 32.0002C25.7443 32.0002 25.4882 31.9023 25.2933 31.7073L17.2932 23.7072C16.9022 23.3162 16.9022 22.6842 17.2932 22.2933L25.2933 14.2932C25.6842 13.9022 26.3162 13.9022 26.7072 14.2932C27.0982 14.6842 27.0982 15.3162 26.7072 15.7072L19.4142 23.0002L26.7072 30.2932C27.0982 30.6842 27.0982 31.3162 26.7072 31.7073C26.5122 31.9023 26.2562 32.0002 26.0002 32.0002Z" fill="#B5B5B5" />
                </svg>
                <p className='title_vacancy_detail'>Вакансии</p>
            </div>
            <div className="block_wrapper">
                <div data-aos="fade-up" data-aos-duration="1000" className='block'>
                    <div className="block_one">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='title_wrapper'> <img src={align} alt="" /> Описание</p>
                        <p className='text_wrapper'>IT Студия Nevisdev - это динамично развивающаяся компания, специализирующаяся на создании высококачественных веб-приложений и решений. Мы ищем опытного Middle Python Developer, который присоединится к нашей команде и поможет нам достичь новых высот в сфере веб-разработки.
                            Если вы готовы внести свой вклад в развитие IT Студии Motion Web LLC и у вас есть необходимые навыки, не стесняйтесь связаться с нами! Мы ждем именно вас, чтобы вместе создавать инновационные и успешные веб-приложения.
                            Пожалуйста, отправьте ваше резюме и сопроводительное письмо на адрес motionwebteam@gmail.com указанием "Middle Python Developer" в теме письма. Мы свяжемся с вами для дальнейшего обсуждения и собеседования.
                            Мы с нетерпением ждем ваших заявок!</p>
                        <p className='title_wrapper'> <img src={check} alt="" /> Обязанности</p>
                        <ul>
                            <li>Разработка и поддержка бэкенд части проектов с использованием</li>
                            <li>Python и Django REST Framework.</li>
                            <li>Контейнеризация приложений с использованием Docker и управление контейнерами с помощью Docker Compose.</li>
                            <li>Настройка Nginx для обеспечения безопасной и высокопроизводительной работы веб-приложений, включая подключение SSL-сертификатов.ƒ</li>
                            <li>Активное участие в командной разработке и работа с системой контроля версий Git.</li>
                            <li>Развертывание и управление приложениями на платформе AWS.</li>
                            <li>Работа с тестовым стендом и написание тестов (включая unit и integration tests).</li>
                        </ul>
                        <p className='title_wrapper'> <img src={handbag} alt="" /> Требования</p>
                        <ul>
                            <li>Разработка и поддержка бэкенд части проектов с использованием</li>
                            <li>Python и Django REST Framework.</li>
                            <li>Контейнеризация приложений с использованием Docker и управление контейнерами с помощью Docker Compose.</li>
                            <li>Настройка Nginx для обеспечения безопасной и высокопроизводительной работы веб-приложений, включая подключение SSL-сертификатов.ƒ</li>
                            <li>Активное участие в командной разработке и работа с системой контроля версий Git.</li>
                            <li>Развертывание и управление приложениями на платформе AWS.</li>
                            <li>Работа с тестовым стендом и написание тестов (включая unit и integration tests).</li>
                        </ul>
                        <p className='title_wrapper'> <img src={cooperative} alt="" /> Условия работы</p>
                        <ul>
                            <li>Разработка и поддержка бэкенд части проектов с использованием</li>
                            <li>Python и Django REST Framework.</li>
                            <li>Контейнеризация приложений с использованием Docker и управление контейнерами с помощью Docker Compose.</li>
                            <li>Настройка Nginx для обеспечения безопасной и высокопроизводительной работы веб-приложений, включая подключение SSL-сертификатов.ƒ</li>
                            <li>Активное участие в командной разработке и работа с системой контроля версий Git.</li>
                            <li>Развертывание и управление приложениями на платформе AWS.</li>
                            <li>Работа с тестовым стендом и написание тестов (включая unit и integration tests).</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="block_one">
                        <p className='title_text'>Заявка</p>
                        <p className='title_box t'> Оставьте свои данные для отклика</p>
                        <div className="form">
                            <input className='input_form' type="text" placeholder='Имя' />
                            <input className='input_form' type="text" placeholder='Номер телефона' />
                            <input className='input_form' type="text" placeholder='Электронная почта' />
                            <input className='input_form' type="text" placeholder='Ссылка на соцсеть(Linkedin)' />
                        </div>
                        <div className="link">
                            <img src={file} alt="" />
                            Прикрепить файл
                        </div>
                        <button className='button_form'>
                            Отправить
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="block_two">
                    <div className="boxs">
                        <div onClick={() => navigate("/vacancy-detail/1")} className="box">
                            <div className="cate">
                                <div className="day">Полный рабочий день</div>
                                <div className="level">Middle</div>
                            </div>
                            <p className="title_box">Middle Frontend разработчик  </p>
                            <div className="line"></div>
                            <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                        </div>
                        <div className="box">
                            <div className="cate">
                                <div className="day">Полный рабочий день</div>
                                <div className="level">Middle</div>
                            </div>
                            <p className="title_box">Middle Frontend разработчик  </p>
                            <div className="line"></div>
                            <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                        </div>
                        <div className="box">
                            <div className="cate">
                                <div className="day">Полный рабочий день</div>
                                <div className="level">Middle</div>
                            </div>
                            <p className="title_box">Middle Frontend разработчик  </p>
                            <div className="line"></div>
                            <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VacancyDetail