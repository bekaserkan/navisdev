import React, { useEffect, useState } from 'react'
import "./EventDetail.css"
import { useNavigate, useParams } from 'react-router-dom'
import align from "../../img/align-text-left-one.svg"
import check from "../../img/check-small.svg"
import handbag from "../../img/handbag.svg"
import cooperative from "../../img/cooperative-handshake.svg"
import file from "../../img/file-addition.svg"
import photo from "../../img/photo_team.svg"
import calendar from "../../img/calendar-three.svg"
import address from "../../img/address.svg"
import time from "../../img/time.svg"
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../../components/UI/Loading/Loading'

const EventDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [event, setEvent] = useState([])
  const [eventDetail, setEventDetail] = useState([])

  useEffect(() => {
    axios.get(url + `/events/${id}`)
      .then((response) => {
        setEventDetail(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
    axios.get(url + "/events")
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
    <div className='event_detail'>
      <div className="navi">
        <svg onClick={() => navigate(-1)} className='navi_link' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <rect width="45" height="45" rx="22.5" fill="white" fill-opacity="0.04" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 32.0002C25.7443 32.0002 25.4882 31.9023 25.2933 31.7073L17.2932 23.7072C16.9022 23.3162 16.9022 22.6842 17.2932 22.2933L25.2933 14.2932C25.6842 13.9022 26.3162 13.9022 26.7072 14.2932C27.0982 14.6842 27.0982 15.3162 26.7072 15.7072L19.4142 23.0002L26.7072 30.2932C27.0982 30.6842 27.0982 31.3162 26.7072 31.7073C26.5122 31.9023 26.2562 32.0002 26.0002 32.0002Z" fill="#B5B5B5" />
        </svg>
        <p className='title_event_detail'>Мероприятия</p>
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
                <img className='image r' src={eventDetail.img} alt="" />
              </div>
              <p className="title_box">{eventDetail.title}</p>
              <div className="line"></div>
              <p className='title_wrapper'> <img src={align} alt="" /> Описание</p>
              <p className='text_wrapper'>
                {React.createElement("p", {
                  dangerouslySetInnerHTML: {
                    __html: eventDetail.detail ? eventDetail.detail : "",
                  },
                })}</p>
              <p className='title_wrapper'> <img src={handbag} alt="" /> Требования</p>
              <ul>
                {React.createElement("li", {
                  dangerouslySetInnerHTML: {
                    __html: eventDetail.requirement ? eventDetail.requirement : "",
                  },
                })}
              </ul>
              <div className="detail">
                <div className="flex">
                  <img src={calendar} alt="" />
                  <p>{eventDetail.data}</p>
                </div>
                <div className="flex">
                  <img src={time} alt="" />
                  <p>{eventDetail.time}</p>
                </div>
                <div className="flex">
                  <img src={address} alt="" />
                  <p>{eventDetail.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="block_two">
            <div data-aos="fade-left" data-aos-duration="1500" className="boxs">
              {event.map(el =>
                <div data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => navigate(`/event-detail/${el.id}`)} className="box">
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
          </div>
        </div>
      }
    </div>
  )
}

export default EventDetail