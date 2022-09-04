import React from 'react'

function Champinfo(props) {
    let player_game = props.player
    return (
        <div>
            {player_game ? 
                <>
                <img style={{'height':'40px'}} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${player_game.championId}.png`}></img> 
                <div>{player_game.champLevel}</div>
                </>
            : "IMG?"}
        </div>
    )
}

export default Champinfo
