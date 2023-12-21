import React, { useEffect, useState } from 'react'
import "./Use.css"
import icon1 from "../../img/icon.svg"
import icon2 from "../../img/icon (1).svg"
import icon3 from "../../img/icon (2).svg"
import icon4 from "../../img/icon (3).svg"
import icon5 from "../../img/icon (4).svg"
import icon6 from "../../img/icon (5).svg"
import icon7 from "../../img/icon (6).svg"
import icon8 from "../../img/icon (7).svg"
import icon9 from "../../img/icon (8).svg"
import icon10 from "../../img/icon (9).svg"
import icon11 from "../../img/icon (10).svg"
import icon12 from "../../img/icon (14).svg"
import icon13 from "../../img/icon (11).svg"
import icon14 from "../../img/icon (12).svg"
import icon15 from "../../img/icon (13).svg"
import axios from 'axios'
import { url } from '../../Api'

const Use = () => {
    const [useData, setUseData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(url + "/App/")
            .then((response) => {
                setUseData(response.data)
                setLoading(true)
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(true)
            })
    }, [])

    return (
        <div className='use'>
            <p className='title_text'>
                Инструменты
            </p>
            <p className='title'>
                Мы используем
            </p>
            <div className="use_contant">
                {loading && useData.map(el =>
                    <div className="use_box">
                        <img src={el.logo} alt="" />
                        <p>{el.title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Use