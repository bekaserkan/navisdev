import React from 'react'
import "./About.css"
import AboutNav from '../../components/AboutNav/AboutNav'
import AboutComp from '../../components/AboutComp/AboutComp'
import Work from '../../components/Work/Work'
import Use from '../../components/Use/Use'
import Consultation from '../../components/Consultation/Consultation'
import Gallery from '../../components/Gallery/Gallery'

const About = () => {
    return (
        <div className='about'>
            <AboutNav />
            <AboutComp />
            <Work />
            {/* <Gallery /> */}
            <Use />
            <Consultation />
        </div>
    )
}

export default About