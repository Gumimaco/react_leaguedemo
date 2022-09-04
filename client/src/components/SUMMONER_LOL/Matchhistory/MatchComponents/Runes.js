import React,{useState} from 'react'
const axios = require('axios')

function Runes(props) {
    const perks = props.player.perks
    const start_path = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/"

    const [path_rune, setrune] = useState()
    const [path_style, setstyle] = useState()

    const resolve_paths = async (rune1,style_id) => {
        await axios.get('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json')
        .then(runes => {
            runes.data.forEach(rune => {
                if (rune.id === rune1) {
                    setrune(rune.iconPath.toLowerCase().split('/').slice(3).join('/'))
                }
            })
        })
        .catch(error => console.log(error))

        await axios.get("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json")
        .then(data => data.data.styles.forEach(style => {
            if (style.id === style_id) {
                setstyle(style.iconPath.toLowerCase().split('/').slice(3).join('/'))
            }
        }))
        .catch(error => console.log(error))
    }
    resolve_paths(perks.styles[0].selections[0].perk,perks.styles[1].style)
    return (
        <div>
            { path_rune ?
                <div>
                    <div style={{'height':'20px'}}><img style={{'height':'20px'}} src={start_path+path_rune}></img></div>
                </div>
                : ""
            }
            {
                path_style ?
                <div>
                    <div style={{'height':'20px'}}><img style={{'height':'20px'}} src={start_path+path_style}></img></div>
                </div>
                : ""
            }
        </div>
    )
}

export default Runes
