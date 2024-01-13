import React, { useEffect } from 'react'
import "./About.css"
import AboutNav from '../../components/AboutNav/AboutNav'
import AboutComp from '../../components/AboutComp/AboutComp'
import Work from '../../components/Work/Work'
import Use from '../../components/Use/Use'
import Consultation from '../../components/Consultation/Consultation'
import Gallery from '../../components/Gallery/Gallery'
import Shorts from '../../components/Shorts/Shorts'

const About = () => {
    useEffect(() => {
        document.title = "О нас"
    }, [])

    return (
        <div className='about'>
            <AboutNav />
            <AboutComp />
            <Work />
            {/* <Gallery /> */}
            <Use />
            <Shorts />
            <Consultation />
        </div>
    )
}

export default About