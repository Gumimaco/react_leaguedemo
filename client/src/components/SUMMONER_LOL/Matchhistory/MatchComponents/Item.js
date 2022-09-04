import React,{useEffect, useState} from 'react'
import './Itemstyle.css'

function Item(props) {
    const [path, setpath] = useState()
    const item_id = props.id
    const items = props.json

    useEffect(() => {
        items.forEach(item => {if (item.id === item_id) { 
            setpath(item.iconPath.toLowerCase().split('/').slice(3).join('/'))
            }
        })
    },[])

    return (
        <div>
            { path ?
                <div className="filled-item-field">
                    <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + path}></img>
                </div>
              : <div className="empty-item-field"></div> 
            }
        </div>
    )
}

export default Item
