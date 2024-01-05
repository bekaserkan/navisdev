import React, { useEffect, useState } from 'react'
import "./Review.css"
import quote from "../../img/quote.svg"
import axios from 'axios'
import { url } from '../../Api'

const Review = () => {
    const [reviewData, setReviewData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(url + "/Review/")
            .then((response) => {
                setReviewData(response.data)
                setLoading(true)
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(true);
            })
    }, [])

    return (
        <div className='review'>
            <p className='title'>
                <p className='title_text'>Отзывы</p>
                Благодарности наших клиентов
            </p>
            <div className="review_contant">
                {loading && reviewData && reviewData.slice(0, 3).map(el =>
                    <div data-aos="zoom-in-up" data-aos-duration="1200" className="review_box">
                        <div className="person">
                            {/* <img className='image' src={el.img} alt="" /> */}
                            <div>
                                <p className='review_title'>{el.name}</p>
                                <p className='review_name'>{el.description}</p>
                            </div>
                        </div>
                        <p className='review_text'>{el.text}</p>
                        <img className='quote' src={quote} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Review