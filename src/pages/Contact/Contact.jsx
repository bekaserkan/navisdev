import React from 'react'
import "./Contact.css"
import address from "../../img/address.svg"
import email from "../../img/email.svg"
import time from "../../img/time.svg"
import phone_number from "../../img/phone_number.svg"
import icon1 from "../../img/iocn_footer1.svg"
import icon2 from "../../img/iocn_footer2.svg"
import icon3 from "../../img/iocn_footer3.svg"
import icon4 from "../../img/li.svg"
import icon5 from "../../img/you.svg"
import ConsultationComp from '../../components/ConsultationComp/ConsultationComp'

const Contact = () => {
    return (
        <div className='contact'>
            <p className="contact_title">
                Контакты
            </p>
            <div className="block">
                <div>
                    <div className="address">
                        <p className='address_text'>
                            <img src={address} alt="" />
                            <div className='add'>
                                г. Бишкек, ул. Манас 60/1
                                <span className='text'>
                                    с 10:00 до 19:00, Пн-Сб
                                </span>
                            </div>
                        </p>
                        <p className='address_text'>
                            <img src={email} alt="" />
                            navisdev@mail.com
                        </p>
                    </div>
                    <div className="image_box">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon5} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                </div>
                <div className="con">
                    <ConsultationComp />
                </div>
            </div>
        </div>
    )
}

export default Contact