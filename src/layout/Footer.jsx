import React from 'react'
import SocialMedia from '../components/SocialMedia'

function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__wrapper'>
                <h2>Tienda online</h2>
                <SocialMedia />
                <p>Copyrigth - 2024</p>
            </div>
        </footer>
    )
}

export default Footer