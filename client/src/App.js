import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom"
import Homeapp from './components/HOME/Homeapp'
import Summonerapp from './components/SUMMONER_LOL/Summonerapp';
import Errorpage from './components/ERROR_PAGE/Errorpage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homeapp/>}/>
        <Route path="lol/summoner/:server/:name/*" element={<Summonerapp/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </>
  );
}

export default App;
