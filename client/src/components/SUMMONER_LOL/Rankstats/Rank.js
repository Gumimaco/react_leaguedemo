import React,{useContext} from 'react'
import {AppContext} from '../Summonerapp'
import Rankdisplay from './Rankdisplay'
import './Rankstyle.css'
function Rank() {
    const data = useContext(AppContext)
    return (
        <div className="rank-box">
            <div className="SOLO RANK-INFO">
                <div>SOLO/DUO RANKED</div>
                {data.rank && data.rank["RANKED_SOLO_5x5"] ? <Rankdisplay data={data.rank["RANKED_SOLO_5x5"]}/> : "UNRANKED" }
            </div>
            <br/>
            <div className="FLEX RANK-INFO">
                <div>FLEX RANKED</div>
                {data.rank && data.rank["RANKED_FLEX_SR"] ? <Rankdisplay data={data.rank["RANKED_FLEX_SR"]}/> : "UNRANKED" }
            </div>
        </div>
    )
}

export default Rank
