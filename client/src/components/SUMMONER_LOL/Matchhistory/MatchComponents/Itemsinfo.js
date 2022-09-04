import React, { useState, useLayoutEffect } from 'react'
import Item from './Item'

const axios = require('axios')

function Itemsinfo(props) {
    const player_game = props.player
    const [itemJSON, setitemJSON] = useState()
    axios.get('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json')
    .then(data => setitemJSON(data.data))
    .catch(error => console.log("problem with getting item json"))
    // Can use context instead of passing 2 props
    return (
        <div>
            { itemJSON ?
                <div style={{'display':'flex'}}>
                <Item id={player_game.item0} json={itemJSON}/>
                <Item id={player_game.item1} json={itemJSON}/>
                <Item id={player_game.item2} json={itemJSON}/>
                <Item id={player_game.item3} json={itemJSON}/>
                <Item id={player_game.item4} json={itemJSON}/>
                <Item id={player_game.item5} json={itemJSON}/>
                <Item id={player_game.item6} json={itemJSON}/>
                </div>
            : ""
            }
        </div>
    )
}

export default Itemsinfo
