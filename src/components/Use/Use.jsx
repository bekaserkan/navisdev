import React from 'react'
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

const Use = () => {
    return (
        <div className='use'>
            <p className='title_text'>
                Инструменты
            </p>
            <p className='title'>
                Мы используем
            </p>
            <div className="use_contant">
                <div className="use_box">
                    <img src={icon1} alt="" />
                    <p>Java script</p>
                </div>
                <div className="use_box">
                    <img src={icon2} alt="" />
                    <p>Python</p>
                </div>
                <div className="use_box">
                    <img src={icon3} alt="" />
                    <p>SQL</p>
                </div>
                <div className="use_box">
                    <img src={icon4} alt="" />
                    <p>Figma</p>
                </div>
                <div className="use_box">
                    <img src={icon5} alt="" />
                    <p>Vscode</p>
                </div>
                <div className="use_box">
                    <img src={icon6} alt="" />
                    <p>CSS</p>
                </div>
                <div className="use_box">
                    <img src={icon7} alt="" />
                    <p>Html</p>
                </div>
                <div className="use_box">
                    <img src={icon8} alt="" />
                    <p>Github</p>
                </div>
                <div className="use_box">
                    <img src={icon9} alt="" />
                    <p>Django</p>
                </div>
                <div className="use_box">
                    <img src={icon10} alt="" />
                    <p>ReactJs</p>
                </div>
                <div className="use_box">
                    <img src={icon11} alt="" />
                    <p>NextJs</p>
                </div>
                <div className="use_box">
                    <img src={icon12} alt="" />
                    <p>Postman</p>
                </div>
                <div className="use_box">
                    <img src={icon13} alt="" />
                    <p>Pycharm</p>
                </div>
                <div className="use_box">
                    <img src={icon14} alt="" />
                    <p>Webstorm</p>
                </div>
                <div className="use_box">
                    <img src={icon15} alt="" />
                    <p>API</p>
                </div>
            </div>
        </div>
    )
}

export default Use