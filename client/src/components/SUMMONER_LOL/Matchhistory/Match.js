import React, { useState,createContext, useLayoutEffect, useEffect,useContext } from 'react'
import Gameinfo from './MatchComponents/Gameinfo'
import Champinfo from './MatchComponents/Champinfo'
import Sumspells from './MatchComponents/Sumspells'
import Runes from './MatchComponents/Runes'
import {AppContext} from '../Summonerapp'
import './Matchstyle.css'
import Statsinfo from './MatchComponents/Statsinfo'
import Itemsinfo from './MatchComponents/Itemsinfo'
import Players from './MatchComponents/Players/Players'

const axios = require('axios')
export const MatchContext = createContext()

function Match(props) {
    const data = useContext(AppContext) 
    const {matchId} = props
    const [state,setState] = useState()
    const [player_game,setPlayer] = useState()

    useEffect(() => {
        const get_data = async () => {
        await axios.get(`http://localhost:5001/lol/match/${data.server}/${matchId}`)
        .then(response => {setState(response.data);response.data.info.participants.forEach(player => {if (player.puuid === data.puuid) {setPlayer(player)}})})
        .catch(error => console.log("GOT ERROR"))
        console.log("EXECUTE AN REQUEST IN MATCH COMPONENT")
        }
        get_data();
    },[])

    return (
        <div className="match-box">
            { state && player_game ?
                <div className={`match ${ player_game.win ? "match-win" : "match-loss"}`}>
                <Gameinfo game={state}/>
                <Champinfo player={player_game}/>
                <Sumspells player={player_game}/>
                <Runes player={player_game}/>
                <Statsinfo player={player_game} time={state.info.gameDuration}/>
                <Itemsinfo player={player_game}/>
                <Players game={state}/>
                </div>
            : "GAME"}
        </div>
    )
}

export default Match
