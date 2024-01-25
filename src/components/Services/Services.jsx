import React, { useEffect, useState } from 'react'
import "./Services.css"
import design1 from "../../img/design.svg"
import design2 from "../../img/design (1).svg"
import design3 from "../../img/design (2).svg"
import design4 from "../../img/design (3).svg"
import design5 from "../../img/design (5).svg"
import design6 from "../../img/design (4).svg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../UI/Loading/Loading'

const Services = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url + "/service/")
            .then((response) => {
                setServices(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    return loading ? (
        <div className="loading_div">
            <Loading />
        </div>
    ) : (
        <div className='services'>
            <p className='title'>
                <p className='title_text'>Предоставляем</p>
                Наши услуги
            </p>
            <div className="services_contant">
                {services.map(el =>
                    <div data-aos="fade-up" data-aos-duration="500" onClick={() => navigate(`/services/${el.slug}`)} className="services_block">
                        <img src={design1} alt="" />
                        <h4 className='services_title'>{el.title}</h4>
                        <p><div className="circle"></div>{el.text}</p>
                    </div>
                )}
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