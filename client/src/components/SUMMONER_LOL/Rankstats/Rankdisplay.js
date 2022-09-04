import React from 'react'

const table = {
    'IRON': "01",
    'BRONZE': "02",
    'SILVER': "03",
    'GOLD': "04",
    'PLATINUM': "05",
    'DIAMOND': "06",
    'MASTER': "07",
    'GRANDMASTER': "08",
    'CHALLENGER': "09"
}

function Rankdisplay(props) {
    const {wins,losses,rank,tier} = props.data
    return (
        <div>
            <div>
            { tier ? <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/${table[tier]}_${tier.toLowerCase()}/images/${tier.toLowerCase()}_baseface_matte.png`}></img> : "" }
            </div>
            <div>
            {tier} {rank}
            </div>
            <div>
            {wins}W {losses}L
            </div>
            <div>
            WR: {Math.floor((wins / (wins+losses))*100)}%
            </div>
        </div>
    )
}

export default Rankdisplay
