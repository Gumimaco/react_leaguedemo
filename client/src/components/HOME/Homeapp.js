import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Search from './SearchComponent/Search'
import Navbar from './NavigatonComponent/Navbar'
import Errorpage from '../ERROR_PAGE/Errorpage'

function Homeapp() {
    return (
        <div className="Homeapp">
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path="/" element={<Search/>}/>
                    <Route path="*" element={<Errorpage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Homeapp
