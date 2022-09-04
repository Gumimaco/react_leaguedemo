import React,{useContext, useLayoutEffect} from 'react'
import {Link,Outlet} from 'react-router-dom'
import {AppContext} from '../Summonerapp'
import './Generalstyle.css'
function General() {

    const data = useContext(AppContext)
    return (
        <div className="general-box">
            <div className="summoner-Info">
                <div className="summoner-Icon">
                    { data.icon ? <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${data.icon}.jpg`}/> : "" }
                </div>
                <div className="summoner-Level">
                    {data.level}
                </div>
                <div className="summoner-Name">
                    {data.name}
                </div>
            </div>
                {/* <Link to="/overview">Overview</Link>
                <Link to="/champ-stats">Champion Stats</Link>
                <Link to="/live-game">Live Game</Link> */}
            <Outlet/>
        </div>
    )

}

export default General
