import React,{useState,useLayoutEffect,createContext, useEffect} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Error404 from './Error/Error404'
import Overviewapp from './Overview/Overviewapp'
import General from './Generalinfo/General'
import './Summonerappstyle.css'
const axios = require("axios")


export const AppContext = createContext()
function Summonerapp() {
    const [state,setState] = useState({})

    useLayoutEffect(() => {
        const array = window.location.href.split('/');
        axios.get(`http://localhost:5001/lol/summoner/${array[5]}/${array[6]}`)
        .then(data => setState(data.data))
        .catch(error => console.log("ERROR",error))
    }, [])

    return (
        <div>
            <AppContext.Provider value={state}>
            <Routes>
                <Route element={<><Navbar/><General/></>}>
                    <Route path="/" element={<Navigate to="/overview"/>}/>
                    <Route path="/overview" element={<Overviewapp/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Route>
            </Routes>
            </AppContext.Provider>
        </div>
    )
}

export default Summonerapp
