import React, { useEffect, useState } from 'react'
import "./Projects.css"
import arrow from "../../img/arrow_white.svg"
import projact1 from "../../img/photo_project (1).svg"
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../Api'

const Projects = () => {
    const [projactsData, setProjactsData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url + "/Project/")
            .then((response) => {
                setProjactsData(response.data)
                setLoading(true);
            })
            .catch(error => {
                console.error('Error placing order:', error);
                setLoading(true);
            })
    }, [])

    return (
        <div className='projects'>
            <p className="title_text">
                Проекты
            </p>
            <p className='title'>Наши Проекты</p>
            <div className="projects_wrapper">
                {loading && projactsData.slice(0, 6).map(el =>
                    <a href={el.url} target='blank' >
                        <div className="projects_box">
                            <div className='project_div'>
                                <img className='image' src={el.image} alt="" />
                            </div>
                            <div className='flex'>
                                <p>{el.title}</p>
                                <GoArrowUpRight className='icon' />
                            </div>
                        </div>
                    </a>
                )}
            </div>
            <button onClick={() => navigate("/projects")} className='button_form_two btn'>
                Все проекты
                <img src={arrow} alt="" />
            </button>
        </div>
    )
}

export default Projects