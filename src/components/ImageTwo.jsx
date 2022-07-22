import React from 'react'
import logo2 from '../images/pen.png'

export default function ImageTwo() {
    return (
        <div className='each-logo-container'>
            <img src={logo2} alt="logo 2" className='logos' />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
        </div>
    )
}
