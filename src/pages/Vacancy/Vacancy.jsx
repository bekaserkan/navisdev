import React, { useState } from 'react'
import "./Vacancy.css"
import { useNavigate } from 'react-router-dom'

const Vacancy = () => {
    const [frontent, setFrontent] = useState(true)
    const [backend, setBackend] = useState(false)
    const [design, setDesign] = useState(false)
    const [men, setMen] = useState(false)
    const [smm, setSmm] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='vacancy'>
            <div className="title_vacancy">Вакансии</div>
            <div className="categoryes">
                <div data-aos="fade-left" data-aos-duration="600" onClick={() => setFrontent(true) || setBackend(false) || setDesign(false) || setMen(false) || setSmm(false)} className={frontent ? "category active" : "category"}>Frontent</div>
                <div data-aos="fade-left" data-aos-duration="800" onClick={() => setFrontent(false) || setBackend(true) || setDesign(false) || setMen(false) || setSmm(false)} className={backend ? "category active" : "category"}>Backend</div>
                <div data-aos="fade-left" data-aos-duration="1000" onClick={() => setFrontent(false) || setBackend(false) || setDesign(true) || setMen(false) || setSmm(false)} className={design ? "category active" : "category"}>Дизайн</div>
                <div data-aos="fade-left" data-aos-duration="1200" onClick={() => setFrontent(false) || setBackend(false) || setDesign(false) || setMen(true) || setSmm(false)} className={men ? "category active" : "category"}>Менеджмент</div>
                <div data-aos="fade-left" data-aos-duration="1400" onClick={() => setFrontent(false) || setBackend(false) || setDesign(false) || setMen(false) || setSmm(true)} className={smm ? "category active" : "category"}>СММ</div>
            </div>
            {frontent &&
                <div className="boxs">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/vacancy-detail/1")} className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                </div>}
            {backend &&
                <div className="boxs">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/vacancy-detail/1")} className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                </div>}
            {design &&
                <div className="boxs">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/vacancy-detail/1")} className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                </div>}
            {men &&
                <div className="boxs">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/vacancy-detail/1")} className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                </div>}
            {smm &&
                <div className="boxs">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate("/vacancy-detail/1")} className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="box">
                        <div className="cate">
                            <div className="day">Полный рабочий день</div>
                            <div className="level">Middle</div>
                        </div>
                        <p className="title_box">Middle Frontend разработчик  </p>
                        <div className="line"></div>
                        <p className='text_box'>Наша компания осуществляет свою деятельность на территории Кыргызстана всей Центральной Азии, оказывая услуги по разработке, внедрению и дальнейшему. оказывая </p>
                    </div>
                </div>}
        </div>
    )
}

export default Vacancy