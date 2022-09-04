import React from 'react'
import Player from './Player'
import './Playerstyle.css'

function Players(props) {
    const game = props.game.info
    let team1 = []
    let team2 = []
    
    game.participants.forEach((player,index) => {
    if (player.teamId === 100) {
        team1.push(<Player key={index} player={player}/>)
    } else {
        team2.push(<Player key={index} player={player}/>)
    }
    })
    
    return (
        <div>
            { (team1.length === 5) && (team2.length === 5) ?
            <div className="teams">
                <div className="team">{team1}</div>
                <div className="team">{team2}</div>
            </div>
            : ""
            }
        </div>
    )
}

export default Players
