import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import "./style.css"

function Navbar() {
    return (
        <div>
        <nav className="Navbar">
            <Link to="/lol/summoner/eun1/MatusgoesBrrrrr">User</Link>
            {/* <Link to="/lol/champions">CHAMPIONS UNUSABLE</Link> */}
        </nav>
        <Outlet/>
        </div>
    )
}

export default Navbar
