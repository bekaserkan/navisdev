import React, { useEffect, useState } from 'react'
import "./Event.css"
import { useNavigate } from 'react-router-dom'
import photo from "../../img/photo_team.svg"
import calendar from "../../img/calendar-three.svg"
import address from "../../img/address.svg"
import time from "../../img/time.svg"
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../../components/UI/Loading/Loading'

const Event = () => {
    const navigate = useNavigate()
    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url + "/events/")
            .then((response) => {
                setEvent(response.data)
                document.title = response.data[0].site_title
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    return (
        <div className='event'>
            <p className="title_event">
                Мероприятия
            </p>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <div className="boxs">
                    {event.slice(0, 3).map(el =>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate(`/event-detail/${el.slug}`)} className="box">
                            <div className="cate">
                                <img className='image' src={el.img} alt="" />
                            </div>
                            <p className="title_box">{el.title}</p>
                            <div className="line"></div>
                            <p className='text_box'>{el.detail}</p>
                            <div className="detail">
                                <div className="flex">
                                    <img src={calendar} alt="" />
                                    <p>{el.data}</p>
                                </div>
                                <div className="flex">
                                    <img src={time} alt="" />
                                    <p>{el.time}</p>
                                </div>
                                <div className="flex">
                                    <img src={address} alt="" />
                                    <p>{el.location}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Event