import React from 'react'
import "./Review.css"
import person from "../../img/photo_client.svg"
import quote from "../../img/quote.svg"

const Review = () => {
    return (
        <div className='review'>
            <p className='title_text'>Отзывы</p>
            <p className='title'>Благодарности наших клиентов</p>
            <div className="review_contant">
                <div className="review_box">
                    <div className="person">
                        <img className='image' src={person} alt="" />
                        <div>
                            <p className='review_title'>Болот Асанов</p>
                            <p className='review_name'>Директов компании “Бекбекей”</p>
                        </div>
                    </div>
                    <p className='review_text'>«Спасибо, ребята за оперативную и качественную работу!
                        Сайт получился отличный! Все, что я хотел реализовали.
                        Буду и дальше сотрудничать.
                        Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</p>
                    <img className='quote' src={quote} alt="" />
                </div>
                <div className="review_box">
                    <div className="person">
                        <img className='image' src={person} alt="" />
                        <div>
                            <p className='review_title'>Болот Асанов</p>
                            <p className='review_name'>Директов компании “Бекбекей”</p>
                        </div>
                    </div>
                    <p className='review_text'>«Спасибо, ребята за оперативную и качественную работу!
                        Сайт получился отличный! Все, что я хотел реализовали.
                        Буду и дальше сотрудничать.
                        Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</p>
                    <img className='quote' src={quote} alt="" />
                </div>
                <div className="review_box">
                    <div className="person">
                        <img className='image' src={person} alt="" />
                        <div>
                            <p className='review_title'>Болот Асанов</p>
                            <p className='review_name'>Директов компании “Бекбекей”</p>
                        </div>
                    </div>
                    <p className='review_text'>«Спасибо, ребята за оперативную и качественную работу!
                        Сайт получился отличный! Все, что я хотел реализовали.
                        Буду и дальше сотрудничать.
                        Теперь у моей авиакомпании стало больше клиентов и все благодаря вам».</p>
                    <img className='quote' src={quote} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Review