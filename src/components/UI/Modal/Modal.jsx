import React from 'react'
import "./Modal.css"
import close from "../../../img/close_modal.svg"

const Modal = ({ setModal, children }) => {
    return (
        <div className='modal'>
            <div onClick={() => setModal(false)} className="modal_not"></div>
            <div className="modal_container">
                <img onClick={() => setModal(false)} className='close' src={close} alt="" />
                {children}
            </div>
        </div>
    )
}

export default Modal