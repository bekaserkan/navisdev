import React, { useEffect, useState } from 'react'
import "./ProjectsAll.css"
import projact from "../../img/photo_project.svg"
import projact1 from "../../img/photo_project (1).svg"
import { GoArrowUpRight } from "react-icons/go";
import axios from 'axios';
import { url } from '../../Api';
import { useNavigate } from 'react-router-dom';

const ProjectsAll = () => {
    const [projactsData, setProjactsData] = useState([])
    const [loading, setLoading] = useState(false)

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
        <div className='projects_all'>
            <p className='title'>Все проекты</p>
            <div className="projects_wrapper">
                {loading && projactsData.map(el =>
                    <a href={el.url} target='blank' >
                        <div data-aos="zoom-in-up" data-aos-duration="1200" className="projects_box">
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
        </div>
    )
}

export default ProjectsAll