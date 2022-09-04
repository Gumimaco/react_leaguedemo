import React from 'react'

function Statsinfo(props) {
    const player_game = props.player
    const time = props.time
    return (
        <div>
            <div>{player_game.kills} / {player_game.deaths} / {player_game.assists}</div>
            <div>{Math.ceil(((player_game.kills + player_game.assists) / player_game.deaths)*100) / 100}:1 KDA</div>
            <div>CS {player_game.totalMinionsKilled + player_game.neutralMinionsKilled} ({Math.round(((player_game.totalMinionsKilled + player_game.neutralMinionsKilled) / (time/60 + ((time%60)/100)))* 10) / 10})</div>
        </div>
    )
}

export default Statsinfo
