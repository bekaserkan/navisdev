import React, { useState } from 'react'
import "./Consultation.css"
import photo from "../../img/block_application.svg"
import ConsultationComp from '../ConsultationComp/ConsultationComp'

const Consultation = ({ setSuccess }) => {
    return (
        <div className='consultation'>
            <img src={photo} alt="" />
            <ConsultationComp setSuccess={setSuccess} />
        </div>
    )
}

export default Consultation