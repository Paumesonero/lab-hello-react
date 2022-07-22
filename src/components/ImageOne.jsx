import React from 'react'
import logo1 from '../images/wrench.png'
export default function ImageOne() {
    return (
        <div className='each-logo-container'>
            <img src={logo1} alt="wrench logo" className='logos' />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
    )
}
