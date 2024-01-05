import React, { useEffect, useRef } from 'react'
import "./Nav.css"
import video from "../../img/5196020190_FE46CA8848A26615723F495152E35B97_video_dashinit.mp4"
import CountUp from 'react-countup';

const Nav = ({ setModal }) => {
    const videoRef = useRef(null);

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


    return (
        <div className='nav'>
            <div className="video-container">
                <video ref={videoRef} muted loop autoPlay>
                    <source src={video} type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                </video>
            </div>
            <div className="video-container bac">

            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="nav_container">
                <span className='it_compony'>
                    IT компания
                </span>
                <h1>Разработка <span className='product'>цифрового продукта</span> для вашего бизнеса</h1>
                <p className='nav_text'>
                    Заказывайте у нас проекты для электронной коммерции, и будьте лучшими в вашей сфере
                </p>
                <div className="btns">
                    <button onClick={() => setModal(true)} className='button_form bay'>Заказать</button>
                    <button onClick={() => setModal(true)} className='button_form cons'>Консультация</button>
                </div>
                <div className="clients">
                    <div data-aos="fade-up" data-aos-duration="500">
                        <span className='client'> <CountUp end={98} duration={5} />+ </span>
                        <p>Довольных клиентов</p>
                    </div >
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <span className='client'> <CountUp end={100} duration={5} />+  </span>
                        <p>Завершенных проектов</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <span className='client'> <CountUp end={25} duration={5} />+  </span>
                        <p>Сотрудников</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav