import React, { useEffect, useState } from 'react'
import "./VacancyDetail.css"
import { useNavigate, useParams } from 'react-router-dom'
import align from "../../img/align-text-left-one.svg"
import check from "../../img/check-small.svg"
import handbag from "../../img/handbag.svg"
import cooperative from "../../img/cooperative-handshake.svg"
import file from "../../img/file-addition.svg"
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../../components/UI/Loading/Loading'

const VacancyDetail = ({ setSuccess }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [vacancyDetail, setVacancyDetail] = useState([])
    const [vacancy, setVacancy] = useState([])
    const [loading, setLoading] = useState(true)
    const [sendData, setSendData] = useState({
        name: "",
        number: "",
        email: "",
        link: "",
        file: null
    })

    useEffect(() => {
        setLoading(true)
        axios.get(url + `/Vacancy/${id}`)
            .then((response) => {
                setVacancyDetail(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
        axios.get(url + "/Vacancy")
            .then((response) => {
                setVacancy(response.data)
                document.title = response.data[0].site_title
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [id])

    const SendFunc = (e) => {
        e.preventDefault();
        setLoading(true)

        axios.post(url + '/application', sendData)
            .then(response => {
                if (response.data.response) {
                    setSuccess(true)
                    setLoading(false)
                    setSendData({
                        ...sendData,
                        name: "",
                        number: "",
                        email: "",
                        link: "",
                        file: null
                    })
                }
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(false);
            })
    }

    return (
        <div className='vacancy_detail'>
            <div className="navi">
                <svg onClick={() => navigate(-1)} className='navi_link' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <rect width="45" height="45" rx="22.5" fill="white" fill-opacity="0.04" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 32.0002C25.7443 32.0002 25.4882 31.9023 25.2933 31.7073L17.2932 23.7072C16.9022 23.3162 16.9022 22.6842 17.2932 22.2933L25.2933 14.2932C25.6842 13.9022 26.3162 13.9022 26.7072 14.2932C27.0982 14.6842 27.0982 15.3162 26.7072 15.7072L19.4142 23.0002L26.7072 30.2932C27.0982 30.6842 27.0982 31.3162 26.7072 31.7073C26.5122 31.9023 26.2562 32.0002 26.0002 32.0002Z" fill="#B5B5B5" />
                </svg>
                <p className='title_vacancy_detail'>Вакансии</p>
            </div>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <div className="block_wrapper">
                    <div data-aos="fade-up" data-aos-duration="1000" className='block'>
                        <div className="block_one">
                            <div className="cate">
                                <div className="day">{vacancyDetail.work_time}</div>
                                <div className="level">{vacancyDetail.level}</div>
                            </div>
                            <p className="title_box">{vacancyDetail.title}</p>
                            <div className="line"></div>
                            <p className='title_wrapper'> <img src={align} alt="" /> Описание</p>
                            <p className='text_wrapper'>{vacancyDetail.detail}</p>
                            <p className='title_wrapper'> <img src={check} alt="" /> Обязанности</p>
                            <ul>
                                {React.createElement("li", {
                                    dangerouslySetInnerHTML: {
                                        __html: vacancyDetail.responsibilyties ? vacancyDetail.responsibilyties : "",
                                    },
                                })}
                            </ul>
                            <p className='title_wrapper'> <img src={handbag} alt="" /> Требования</p>
                            <ul>
                                {React.createElement("li", {
                                    dangerouslySetInnerHTML: {
                                        __html: vacancyDetail.text ? vacancyDetail.text : "",
                                    },
                                })}
                            </ul>
                            <p className='title_wrapper'> <img src={cooperative} alt="" /> Условия работы</p>
                            <ul>
                                {React.createElement("li", {
                                    dangerouslySetInnerHTML: {
                                        __html: vacancyDetail.condition ? vacancyDetail.condition : "",
                                    },
                                })}
                            </ul>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1500" className="block_one">
                            <p className='title_text'>Заявка</p>
                            <p className='title_box t'> Оставьте свои данные для отклика</p>
                            <form onSubmit={SendFunc}>
                                <div className="form">
                                    <input value={sendData.name} onChange={(e) => setSendData({ ...sendData, name: e.target.value })} required className='input_form' type="text" placeholder='Имя' />
                                    <input value={sendData.number} onChange={(e) => setSendData({ ...sendData, number: e.target.value })} required className='input_form' type="number" placeholder='Номер телефона' />
                                    <input value={sendData.email} onChange={(e) => setSendData({ ...sendData, email: e.target.value })} required className='input_form' type="email" placeholder='Электронная почта' />
                                    <input value={sendData.link} onChange={(e) => setSendData({ ...sendData, link: e.target.value })} required className='input_form' type="text" placeholder='Ссылка на соцсеть(Linkedin)' />
                                </div>
                                <label>
                                    <div className="link">
                                        <img src={file} alt="" />
                                        {sendData.file == null ? "Прикрепить файл" : sendData.file}
                                    </div>
                                    <input
                                        type="file"
                                        onChange={(e) => setSendData({ ...sendData, file: e.target.value })}
                                        style={{ display: "none" }}
                                    />
                                </label>
                                <button disabled={loading} onSubmit={SendFunc} className='button_form'>
                                    {loading ? <Loading /> : "Отправить"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="block_two">
                        <div className="boxs">
                            {vacancy.filter(obj => {
                                return vacancyDetail.direction == obj.direction
                            }).map(el =>
                                <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate(`/vacancy-detail/${el.id}`)} className="box">
                                    <div className="cate">
                                        <div className="day">
                                            {el.work_time}
                                        </div>
                                        <div className="level">{el.level}</div>
                                    </div>
                                    <p className="title_box">{el.title}</p>
                                    <div className="line"></div>
                                    <p className='text_box'>
                                        {React.createElement("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: el.detail ? el.detail : "",
                                            },
                                        })}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default VacancyDetail