import React from 'react'
import "./AboutNav.css"
import baner from "../../img/baner_info.svg"
import CountUp from 'react-countup';

const AboutNav = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='about_nav'>
            <img src={baner} alt="" />
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
    )
}

export default AboutNav