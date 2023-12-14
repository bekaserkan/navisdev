import React from 'react'
import "./Main.css"
import Nav from '../../components/Nav/Nav'
import Services from '../../components/Services/Services'

const Main = () => {
  return (
    <div className='main'>
      <Nav />
      <Services />
    </div>
  )
}

export default Main