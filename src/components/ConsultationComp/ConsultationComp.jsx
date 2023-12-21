import React, { useState } from 'react'
import "./ConsultationComp.css"
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../UI/Loading/Loading'

const ConsultationComp = ({ setSuccess, setModal }) => {
    const [loading, setLoading] = useState(false)
    const [sendData, setSendData] = useState({
        name: "",
        number: "",
        interesting: ""
    })

    const SendFunc = (e) => {
        e.preventDefault();
        setLoading(true)

        axios.post(url + '/Admissions/', sendData)
            .then(response => {
                if (response.data.response) {
                    setModal(false)
                    setSuccess(true)
                    setLoading(false)
                    setSendData({
                        ...sendData,
                        name: "",
                        number: "",
                        interesting: ""
                    })
                }
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(false);
            })
    }

    return (
        <div className="block_consultation">
            <p className='title_text'>Заявка</p>
            <p className='title'>Получить бесплатную консультацию</p>
            <form onSubmit={SendFunc} className='form'>
                <input value={sendData.name} onChange={(e) => setSendData({ ...sendData, name: e.target.value })} className='input_form' type="text" placeholder='Имя *' required />
                <input value={sendData.number} onChange={(e) => setSendData({ ...sendData, number: e.target.value })} className='input_form' type="number" placeholder='Номер телефона *' required />
                <input value={sendData.interesting} onChange={(e) => setSendData({ ...sendData, interesting: e.target.value })} className='input_form' type="text" placeholder='Что вас интересует?' required />
                <button disabled={loading} onSubmit={SendFunc} className='button_form'> {loading ? <Loading /> : "Отправить"}</button>
            </form>
        </div>
    )
}

export default ConsultationComp