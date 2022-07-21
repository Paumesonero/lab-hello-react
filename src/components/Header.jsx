import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

export default function Header() {
    return (
        <div>
            <div>
                <img src={logo} alt="ironhack logo" />
                <img src={menu} alt="burguer menu" />
            </div>
        </div>
    )
}
