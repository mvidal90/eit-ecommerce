import React from 'react'
import { bool, element } from 'prop-types'

function Modal({children, show}) {
    return (
        show ? (
            <div className='modal__overlay'>
                <div className='modal__container'>
                    {children}
                </div>
            </div>
        ) : undefined
    )
}

Modal.propTypes = {
    children: element.isRequired,
    show: bool
}

Modal.defaultProps = {
    show: false
}

export default Modal