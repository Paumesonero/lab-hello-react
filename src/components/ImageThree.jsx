import React from 'react'
import logo3 from '../images/computer.png'

export default function ImageThree() {
    return (
        <div className='each-logo-container'>
            <img src={logo3} alt="logo 3" className='logos' />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
        </div>
    )
}