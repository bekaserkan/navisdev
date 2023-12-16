import React from 'react'
import "./Projects.css"
import arrow from "../../img/arrow_white.svg"
import projact from "../../img/photo_project.svg"
import projact1 from "../../img/photo_project (1).svg"
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
    return (
        <div className='projects'>
            <p className="title_text">
                Проекты
            </p>
            <p className='title'>Наши Проекты</p>
            <div className="projects_wrapper">
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact1} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact1} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact1} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
                <div className="projects_box">
                    <div className='project_div'>
                        <img className='image' src={projact} alt="" />
                    </div>
                    <div className='flex'>
                        <p>Сайт для поиска и покупки авиабилетов</p>
                        <GoArrowUpRight className='icon' />
                    </div>
                </div>
            </div>
            <button className='button_form_two btn'>
                Все проекты
                <img src={arrow} alt="" />
            </button>
        </div>
    )
}

export default Projects