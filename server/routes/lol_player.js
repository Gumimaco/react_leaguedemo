const {Router} = require('express')
const router = Router()
const API_KEY = require('../API_KEY')
const axios = require('axios')

const continent_to_region = {
    'eun1': 'europe',
    'euw1': 'europe',
    'na1': 'america',
    'kr': 'asia'
}

let state = {rank: {}}
const get_data = async (name,server) => {
    console.log(name,server)
    // TO GET ID & PUUID
    await axios.get(`https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
    .then(data => {
        state.puuid = data.data.puuid
        state.id = data.data.id
        state.level = data.data.summonerLevel
        state.icon = data.data.profileIconId
    })
    .catch(error => {return true})

    // TO GET RANKED STATS
    await axios.get(`https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${state.id}?api_key=${API_KEY}`)
    .then(data => {
        data.data.forEach(queue_type => state.rank[`${queue_type.queueType}`] = queue_type)
    })
    .catch(error => {return true})
    
    // TO GET MATCH HISTORY LAST 100
    await axios.get(`https://${continent_to_region[server]}.api.riotgames.com/lol/match/v5/matches/by-puuid/${state.puuid}/ids?start=0&count=100&api_key=${API_KEY}`)
    .then(data => {state.matches = data.data})
    .catch(error => {return true})
    return false;
}


router.get('/:server/:name',async (req,res) => {
    state.name = req.params.name
    state.server = req.params.server
    if (await get_data(state.name,state.server)) {
        res.send({})
    } else {
        res.send(state)
    }
})

module.exports = router