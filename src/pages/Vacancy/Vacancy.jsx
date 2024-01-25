import React, { useEffect, useState } from 'react'
import "./Vacancy.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../components/UI/Loading/Loading'
import { url } from '../../Api'

const Vacancy = () => {
    const [cate, setCate] = useState(2)
    const navigate = useNavigate()
    const [vacancy, setVacancy] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url + "/Vacancy/")
            .then((response) => {
                setVacancy(response.data)
                document.title = response.data[0].site_title
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    return (
        <div className='vacancy'>
            <div className="title_vacancy">Вакансии</div>
            <div data-aos="fade-left" data-aos-duration="800" className="categoryes">
                <div onClick={() => setCate(2)} className={cate == 2 ? "category active" : "category"}>Frontent</div>
                <div onClick={() => setCate(1)} className={cate == 1 ? "category active" : "category"}>Backend</div>
                <div onClick={() => setCate(3)} className={cate == 3 ? "category active" : "category"}>Дизайн</div>
                <div onClick={() => setCate(4)} className={cate == 4 ? "category active" : "category"}>Менеджмент</div>
                <div onClick={() => setCate(5)} className={cate == 5 ? "category active" : "category"}>СММ</div>
            </div>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <div className="boxs">
                    {vacancy.filter(obj => {
                        return cate == obj.direction
                    }).map(el =>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate(`/vacancy-detail/${el.slug}`)} className="box">
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
            }
        </div>
    )
}

export default Vacancy