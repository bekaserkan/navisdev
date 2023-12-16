import React from 'react'
import "./Consultation.css"
import photo from "../../img/block_application.svg"

const Consultation = () => {
    return (
        <div className='consultation'>
            <img src={photo} alt="" />
            <div className="block">
                <p className='title_text'>Заявка</p>
                <p className='title'>Получить бесплатную консультацию</p>
                <form className='form'>
                    <input className='input_form' type="text" placeholder='Имя' />
                    <input className='input_form' type="text" placeholder='Номер телефона' />
                    <input className='input_form' type="text" placeholder='Что вас интересует?' />
                    <button className='button_form'>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Consultation