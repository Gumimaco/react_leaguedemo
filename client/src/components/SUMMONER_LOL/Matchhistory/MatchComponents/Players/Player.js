import React from 'react'
import {useNavigate} from "react-router-dom"

function Player(props) {
    const player = props.player
    const navigate = useNavigate()

    return (
        <div>
            <div style={{'display':'flex'}}>
                <img style={{'height':'40px','borderRadius':'50%'}} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${player.championId}.png`}></img>
                <div style={{'paddingLeft':'8px','alignSelf':'center'}}>{player.summonerName}</div>
            </div>
        </div>
    )
}

export default Player
