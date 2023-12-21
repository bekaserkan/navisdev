import React, { useEffect, useState } from 'react'
import "./IconCompony.css"
import axios from 'axios'
import { url } from '../../Api'
import img1 from "../../img/image 1895 (1).svg"
import img2 from "../../img/image 1896 (1).svg"
import img3 from "../../img/image 1898 (1).svg"
import img4 from "../../img/image 1899 (1).svg"

const IconCompony = () => {
    const [iconData, setIconData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(url + "/Partners/")
            .then((response) => {
                setIconData(response.data)
                setLoading(true)
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(true)
            })
    }, [])

    return (
        <div className='icon_compony'>
            {loading && iconData.map(el =>
                <img src={el.logo} alt="" />
            )}
        </div>
    )
}

export default IconCompony