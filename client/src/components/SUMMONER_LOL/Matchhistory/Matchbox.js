import React,{useContext, useEffect} from 'react'
import {AppContext} from '../Summonerapp'
import Match from './Match'

function Matchbox() {
    let data = useContext(AppContext)
    let matchList = data.matches ? data.matches.slice(0,10).map(matchId => {return <li key={matchId}><Match matchId={matchId}/></li>}) : "[]";

    useEffect(() => {
        console.log("MATCHBOX")
    })

    return (
        <div>
            { matchList ? 
            <ul style={{"listStyle": "none","paddingLeft":"0px"}}>
                {matchList}
            </ul> : "MATCHBOX" }
        </div>
    )
}

export default Matchbox
