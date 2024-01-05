import React from 'react'
import "./Work.css"

const Work = () => {
    return (
        <div className='work'>
            <p className='title'>
                <p className="title_text">
                    Этапы
                </p>
                Как мы работаем
            </p>
            <div className="work_contant">
                <div data-aos="fade-up" data-aos-duration="500" className='work_box'>
                    <div className="circle_div">1</div>
                    <p className='work_title'>Заявка</p>
                    <p className='work_text'>Наши  менеджеры связываются
                        для обсуждения деталей вашего
                        будущего проекта </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='work_box'>
                    <div className="circle_div">2</div>
                    <p className='work_title'>Договор</p>
                    <p className='work_text'>На основе анализа и
                        ƒпожеланий клиента, составляем ТЗ,
                        и согласуем стоимость</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='work_box'>
                    <div className="circle_div">3</div>
                    <p className='work_title'>Разработка</p>
                    <p className='work_text'>Создаем качественнный
                        дизайн и работаем над версткой и разработкой</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className='work_box'>
                    <div className="circle_div">4</div>
                    <p className='work_title'>Оптимизация</p>
                    <p className='work_text'>
                        Размещение, тестирование на разных
                        компьютерных и мобильных устройствах </p>
                </div>
            </div>
        </div>
    )
}

export default Work