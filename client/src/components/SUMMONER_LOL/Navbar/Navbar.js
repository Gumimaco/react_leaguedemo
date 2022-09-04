import React from 'react'
import './Navstyle.css'
function Navbar() {
    return (
        <div className="navbar">
            <form>
                <select name="server" id="servers">
                    <option value="eune">EUNE</option>
                    <option value="euw">EUW</option>
                    <option value="na">NA</option>
                    <option value="kr">KR</option>
                </select>
                <input type="text" placeholder="Search..." className="navInputField"></input>
            </form>
        </div>
    )
}

export default Navbar
