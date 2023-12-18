import React from 'react'
import "./Main.css"
import Nav from '../../components/Nav/Nav'
import Services from '../../components/Services/Services'
import AboutComp from '../../components/AboutComp/AboutComp'
import Work from '../../components/Work/Work'
import Projects from '../../components/Projects/Projects'
import Use from '../../components/Use/Use'
import Review from '../../components/Review/Review'
import IconCompony from '../../components/IconCompony/IconCompony'
import Consultation from '../../components/Consultation/Consultation'

const Main = ({ setModal }) => {
  return (
    <div className='main'>
      <Nav setModal={setModal} />
      <Services />
      <AboutComp />
      <Work />
      <Projects />
      <Use />
      <Review />
      <IconCompony />
      <Consultation />
    </div>
  )
}

export default Main