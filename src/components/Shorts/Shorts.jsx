import React from 'react'
import "./Shorts.css"
import ava from "../../img/ava.svg"
import you from "../../img/you_tube.svg"

const Shorts = () => {
  return (
    <div className='shorts'>
      <div className="boxs">

        <div className="box">
          <img className='you' src={you} alt="" />

          <div className="contant">
            <div className="copm">
              <img src={ava} alt="" />
              Navisdevs
            </div>
            <p>О компании Navisdevs</p>
          </div>
        </div>

        <div className="box">
          <img className='you' src={you} alt="" />

          <div className="contant">
            <div className="copm">
              <img src={ava} alt="" />
              Navisdevs
            </div>
            <p>Что такое мобильное приложение?</p>
          </div>
        </div>

        <div className="box">
          <img className='you' src={you} alt="" />

          <div className="contant">
            <div className="copm">
              <img src={ava} alt="" />
              Navisdevs
            </div>
            <p>Как разрабатываются сайты и мобильные приложения?</p>
          </div>
        </div>

        <div className="box">
          <img className='you' src={you} alt="" />

          <div className="contant">
            <div className="copm">
              <img src={ava} alt="" />
              Navisdevs
            </div>
            <p>Румтур по офису Nevisdevs</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shorts