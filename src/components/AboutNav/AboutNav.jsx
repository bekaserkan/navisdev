import React from 'react'
import "./AboutNav.css"
import baner from "../../img/baner_info.svg"

const AboutNav = () => {
    return (
        <div className='about_nav'>
            <img src={baner} alt="" />
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

export default AboutNav