import React, { useEffect, useState } from 'react'
import "./Design.css"
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../../components/UI/Loading/Loading'

const Design = () => {
    const slug = useParams()
    const [services, setServices] = useState([])
    const [serviceDetail, setServicesDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url + `/service/${slug.slug}`)
            .then((response) => {
                setServicesDetail(response.data)
                axios.get(url + "/service/")
                    .then((response) => {
                        setServices(response.data)
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log(error);
                        setLoading(false)
                    })
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [slug])

    useEffect(() => {

    }, [])



    return (
        <div className='design'>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <>
                    <img className='image' src={serviceDetail.image} alt="" />
                    <div className="wrapper">
                        <div className="wrapper_one">
                            {serviceDetail?.service?.map(el =>
                                <>
                                    <p className="design_title">
                                        {el.name}
                                    </p>
                                    <img className='design_photo' src={el.img} alt="" />
                                    <p className='design_text'>
                                        {el.description}
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="wrapper_two">
                            <p className='wrapper_title'>
                                Наши услуги
                            </p>
                            <div className="wrapper_box">
                                {services.map(el =>
                                    <NavLink className="page" to={`/services/${el.slug}`}>
                                        {el.title}
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Design