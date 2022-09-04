import React,{useEffect} from 'react'
import Rank from '../Rankstats/Rank'
import Matchbox from '../Matchhistory/Matchbox'

function Overviewapp() {
    
    useEffect(() => {
        console.log("Overview app")
    })
    
    return (
        <div>
            <Rank/>
            <Matchbox/>
        </div>
    )
}

export default Overviewapp
