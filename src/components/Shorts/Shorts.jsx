import React, { useEffect, useRef, useState } from 'react'
import "./Shorts.css"
import ava from "../../img/ava.svg"
import you from "../../img/you_tube.svg"
import Slider from 'react-slick'
import video from "../../img/5196020190_FE46CA8848A26615723F495152E35B97_video_dashinit.mp4"
import axios from 'axios'
import { url } from '../../Api'

const Shorts = () => {
  const [short, setShort] = useState(false)
  const [pouse, setPouse] = useState(false)
  const [reals, setReals] = useState([])
  const [real, setReal] = useState([])
  const videoRef = useRef(null);

  useEffect(() => {
    axios.get(url + "/reals")
      .then((response) => {
        setReals(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (pouse) {
      if (videoRef.current) videoRef.current.pause();
    }
  }, [pouse])

  useEffect(() => {
    const handleVideoEnded = () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => { }).catch((error) => {
          console.log(error);
        });
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='shorts'>
      <div className="boxs">
        {reals.map(el =>
          <div className='box_one'>
            <div onClick={() => setShort(true) || setReal(el)} className="box">
              <img className='you' src={you} alt="" />
              <img className='image' src={el.image} alt="" />
              <div className="contant">
                <div className="copm">
                  <img src={ava} alt="" />
                  Navisdevs
                </div>
                <p>{el.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {short && real &&
        <div className="storis_div">
          <div className="storis_box">
            <svg onClick={() => setShort(false)} className='close' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <rect width="45" height="45" rx="22.5" fill="white" fill-opacity="0.04" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4143 22.0002L28.7072 16.7072C29.0982 16.3162 29.0982 15.6842 28.7072 15.2932C28.3162 14.9022 27.6842 14.9022 27.2933 15.2932L22.0002 20.5862L16.7072 15.2932C16.3162 14.9022 15.6842 14.9022 15.2932 15.2932C14.9022 15.6842 14.9022 16.3162 15.2932 16.7072L20.5862 22.0002L15.2932 27.2933C14.9022 27.6842 14.9022 28.3162 15.2932 28.7072C15.4882 28.9022 15.7442 29.0002 16.0002 29.0002C16.2563 29.0002 16.5122 28.9022 16.7072 28.7072L22.0002 23.4143L27.2933 28.7072C27.4882 28.9022 27.7443 29.0002 28.0002 29.0002C28.2562 29.0002 28.5122 28.9022 28.7072 28.7072C29.0982 28.3162 29.0982 27.6842 28.7072 27.2933L23.4143 22.0002Z" fill="#B5B5B5" />
            </svg>
            <Slider {...settings} >
              <div>
                <div className="short_box">
                  <video ref={videoRef} muted loop autoPlay onClick={() => setPouse(!pouse)}>
                    <source src={real.url} type="video/mp4" />
                    Ваш браузер не поддерживает тег video
                  </video>
                  <div className="contant">
                    <div className="copm">
                      <img src={ava} alt="" />
                      Navisdevs
                    </div>
                    <p>{real.title}</p>
                  </div>
                </div>
              </div>
              {reals.map((el) => (
                el.id === real.id ? "" : (
                  <div key={el.id}>
                    <div className="short_box">
                      <video ref={videoRef} muted loop autoPlay onClick={() => setPouse(!pouse)}>
                        <source src={el.url} type="video/mp4" />
                        Ваш браузер не поддерживает тег video.
                      </video>
                      <div className="contant">
                        <div className="copm">
                          <img src={ava} alt="" />
                          Navisdevs
                        </div>
                        <p>{el.title}</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </Slider>
          </div>
        </div>
      }
    </div>
  )
}

export default Shorts