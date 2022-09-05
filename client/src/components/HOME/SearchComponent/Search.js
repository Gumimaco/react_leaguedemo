import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./style.css"

function Search() {
    const [state,setState] = useState({name: "",server: ""})
    const navigate = useNavigate();

    const server_change = event => {
       setState({...state, server: event.target.id})
    }
    return (
        <div className="SearchField">
            <form spellCheck="false" onSubmit={event => {
                event.preventDefault()
                navigate(`lol/summoner/${state.server}/${state.name}/overview`,{state})
            }}>
            <div className="search">
                <input type="text" onChange={event => {setState({...state, name: event.target.value})}}></input>
                <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
            </div>
            <div className="buttons_master">
                <input type="radio" onClick={server_change} value="eun1" id="eun1" name="server" required></input>
                <label htmlFor="eun1">EUNE</label>
                <input type="radio" onClick={server_change} value="euw1" id="euw1" name="server"></input>
                <label htmlFor="euw1">EUW</label>
                <input type="radio" onClick={server_change} value="na1" id="na1" name="server"></input>
                <label htmlFor="na1">NA</label>
                <input type="radio" onClick={server_change} value="kr" id="kr" name="server"></input>
                <label htmlFor="kr">KR</label>
                <input type="radio" onClick={server_change} value="oce1" id="oce1" name="server"></input>
                <label htmlFor="oce1">OCE</label>
            </div>
            </form>
        </div>
    )
}

export default Search
