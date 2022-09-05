import React from 'react'
import {Outlet} from 'react-router-dom'
import "./style.css"

function Navbar() {


    return (
        <nav className="Navbar">
            <div className="logo-text">
                <img src="https://cdn.pixabay.com/photo/2016/04/01/00/22/cat-1298141_960_720.png"></img>
                <div>LEAGUE.DEMO</div>
            </div>
            <Outlet/>
        </nav>
    )
}

export default Navbar
