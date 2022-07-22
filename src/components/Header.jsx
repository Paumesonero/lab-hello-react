import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-logos-container'>
                <img src={logo} alt="ironhack logo" />
                <img src={menu} alt="burguer menu" id='test' />
            </div>
            <div className='header-text-container'>
                <h1>Say hello to ReactJs</h1>
                <p>You will learn how to use the most popular frontend library, and become a super ninja
                    developer.
                </p>
                <button>Awesome!</button>
            </div>
        </div>
    )
}
