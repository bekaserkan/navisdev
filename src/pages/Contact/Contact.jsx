import React from 'react'
import "./Contact.css"
import address from "../../img/address.svg"
import email from "../../img/email.svg"
import time from "../../img/time.svg"
import phone_number from "../../img/phone_number.svg"
import icon1 from "../../img/iocn_footer1.svg"
import icon2 from "../../img/iocn_footer2.svg"
import icon3 from "../../img/iocn_footer3.svg"
import Consultation from '../../components/Consultation/Consultation'

const Contact = () => {
    return (
        <div className='contact'>
            <p className="contact_title">
                Контакты
            </p>
            <div className="address">
                <p className='address_text'>
                    <img src={address} alt="" />
                    г. Бишкек, ул. Манас 60/1
                </p>
                <p className='address_text'>
                    <img src={time} alt="" />
                    с 10:00 до 19:00, Пн-Сб
                </p>
                <p className='address_text'>
                    <img src={phone_number} alt="" />
                    +996 502 800 202
                </p>
                <p className='address_text d'>
                    <img src={email} alt="" />
                    airtickets@mail.com
                </p>
            </div>
            <div className="image_box">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.162788097757!2d74.58461617615853!3d42.86940810277049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9a0360ea95b%3A0x1484f7504c9ac9b4!2sNOVOTEL%20Bishkek%20City%20Center!5e0!3m2!1sru!2skg!4v1702722410320!5m2!1sru!2skg"
                    width={"100%"}
                    height={400}
                    style={{ border: "none" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="margin"></div>
            <Consultation />
        </div>
    )
}

export default Contact