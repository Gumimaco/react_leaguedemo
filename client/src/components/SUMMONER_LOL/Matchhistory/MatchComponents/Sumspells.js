import React,{useState} from 'react'
const axios = require('axios')

function Sumspells(props) {
    const {summoner1Id,summoner2Id} = props.player
    const [path1,setP1] = useState()
    const [path2,setP2] = useState()

    const resolve_path = async (sum1,sum2) => {
        let spelljson;
        let path_summ1 = ""
        let path_summ2 = ""
        await axios.get("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json")
        .then(data => spelljson = data.data)
        .catch(error => console.log("got error"))
        spelljson.forEach(obj => {
            if (obj.id === sum1) {
                setP1(obj.iconPath.split('/').at(-1).toLowerCase())
            }
            if (obj.id === sum2) {
                setP2(obj.iconPath.split('/').at(-1).toLowerCase())
            }
        })
    }
    resolve_path(summoner1Id,summoner2Id)

    return (
        <div>
            { path1 && path2 ?
            <div>
                <div>
                    <div style={{'height':'20px'}}><img style={{'height':'20px'}} src={`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${path1}`}></img></div>
                    <div style={{'height':'20px'}}><img style={{'height':'20px'}} src={`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${path2}`}></img></div>
                </div>
            </div>
            : "" 
            }
        </div>
    )
}

export default Sumspells
