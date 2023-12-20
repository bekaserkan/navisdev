import React from 'react'
import "./Nav.css"

const Nav = ({ setModal }) => {
    return (
        <div className='nav'>
            <div className="nav_container">
                <span className='it_compony'>
                    IT компания
                </span>
                <h1>Разработка <span className='product'>цифрового продукта</span> для вашего бизнеса</h1>
                <p className='nav_text'>
                    Заказывайте у нас проекты для электронной коммерции, и будьте лучшими в вашей сфере
                </p>
                <div className="btns">
                    <button onClick={() => setModal(true)} className='button_form bay'>Заказать</button>
                    <button onClick={() => setModal(true)} className='button_form cons'>Консультация</button>
                </div>
                <div className="clients">
                    <div>
                        <span className='client'>98+</span>
                        <p>Довольных клиентов</p>
                    </div>
                    <div>
                        <span className='client'>100+</span>
                        <p>Завершенных проектов</p>
                    </div>
                    <div>
                        <span className='client'>25+</span>
                        <p>Сотрудников</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav