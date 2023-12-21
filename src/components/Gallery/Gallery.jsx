import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import axios from 'axios'
import { url } from '../../Api'

const Gallery = () => {
    const [galleryData, setGalleryData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(url + "/Gallery/")
            .then((response) => {
                setGalleryData(response.data)
                setLoading(true)
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(true)
            })
    }, [])

    return (
        <div className='gallery'>
            {loading && galleryData &&
                <>
                    <p className="title_text">
                        Фотографии
                    </p>
                    <p className='title'>
                        Галерея
                    </p>
                    <div className="gallery_box">
                        {
                            galleryData.slice(0, 5).map(el =>
                                <img className='image' src={el.image} alt="" />
                            )
                        }
                    </div>
                    {/* <div className="gallery_box_one">
                        <img src={galleryData[1].image} alt="" />
                        <img src={galleryData[2].image} alt="" />
                    </div>
                    <div className="gallery_box_two">
                        <img src={galleryData[3].image} alt="" />
                        <img src={galleryData[4].image} alt="" />
                        <img className='image_none' src={galleryData[5].image} alt="" />
                    </div>
                    <img className='image_block' src={galleryData[5].image} alt="" /> */}
                </>
            }
        </div>
    )
}

export default Gallery