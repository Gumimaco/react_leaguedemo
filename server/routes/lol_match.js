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



router.get('/:server/:matchid', async (req,res) => {
    await axios.get(`https://${continent_to_region[req.params.server]}.api.riotgames.com/lol/match/v5/matches/${req.params.matchid}?api_key=${API_KEY}`)
    .then(data => {res.send(data.data)})
    .catch(error => {res.send("ERROR")})
})

module.exports = router