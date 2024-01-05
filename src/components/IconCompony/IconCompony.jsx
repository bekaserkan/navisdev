import React, { useEffect, useState } from 'react'
import "./IconCompony.css"
import axios from 'axios'
import { url } from '../../Api'
import Slider from 'react-slick'

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

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='icon_compony'>
            <div>
                <Slider className='slide' {...settings}>
                    {loading && iconData.map(el =>
                        <div>
                            <img src={el.logo} alt="" />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default IconCompony