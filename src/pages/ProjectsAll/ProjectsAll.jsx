import React from 'react'
import "./ProjectsAll.css"
import projact from "../../img/photo_project.svg"
import projact1 from "../../img/photo_project (1).svg"
import { GoArrowUpRight } from "react-icons/go";

const ProjectsAll = () => {
    return (
        <div className='projects_all'>
            <p className='title'>Все проекты</p>
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
            </div>
        </div>
    )
}

export default ProjectsAll