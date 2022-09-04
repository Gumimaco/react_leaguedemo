import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../../Summonerapp'
const queue_convertor = require('../Queuetypes')

const get_time_ago = (time) => {
    let amount = 0;
    let verb = "";
    const day = 60 * 60 * 24;
    const hour = day/24;
    const minute = hour/60;
    const second = minute/60;
    const week = day * 7;
    const month = week * 4;
    const year = day * 354;
    let difference = (Math.floor(Date.now() / 1000)) - (time)
    switch (true) {
        case difference < minute:
            amount = difference
            verb = "second"
            break;
        case difference < hour:
            amount = Math.floor(difference/minute)
            verb = "minute"
            break;
        case difference < day:
            amount = Math.floor(difference/hour)
            verb = "hour"
            break;
        case difference < week:
            amount = Math.floor(difference/day)
            verb = "day"
            break;
        case difference < month:
            amount = Math.floor(difference/week)
            verb = "week"
            break;
        case difference < year:
            amount = Math.floor(difference/month)
            verb = "month"
            break;
    }
    amount === 1 ? amount = "a" : verb = verb + "s"

    return {verb,amount}
}

function Gameinfo(props) {
    let data = useContext(AppContext)
    const [state,setState] = useState()
    const [win,setWin] = useState()
    const time_ago = get_time_ago(Math.floor(props.game.info.gameEndTimestamp/1000))

    useEffect(() => {
        setState(props.game)
        props.game.info.participants.forEach(player => {if (player.puuid === data.puuid) {
            setWin(player.win)
            // console.log(player.summonerName,player.win,player.championName)
        } })

    },[])

    return (
        <div>
            {state ?
            <div style={{'width':'100px'}}>
                {/* <div>{props.game.metadata.matchId}</div> */}
                <div>{queue_convertor[state.info.queueId]}</div>
                <div>{win ? "Victory" : "Defeat"}</div>
                <div>{Math.floor(state.info.gameDuration/60)}m {state.info.gameDuration%60}s</div>
                <div>{time_ago.amount} {time_ago.verb} ago</div>
            </div>
            : "?"}
        </div>
    )
}

export default Gameinfo
