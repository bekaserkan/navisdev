import React from 'react'
import "./Gallery.css"
import photo from "../../img/about_photo.svg"

const Gallery = () => {
    return (
        <div className='gallery'>
            <p className="title_text">
                Фотографии
            </p>
            <p className='title'>
                Галерея
            </p>
            <div className="gallery_box_one">
                <img src={photo} alt="" />
                <img src={photo} alt="" />
            </div>
            <div className="gallery_box_two">
                <img src={photo} alt="" />
                <img src={photo} alt="" />
                <img src={photo} alt="" />
            </div>
        </div>
    )
}

export default Gallery