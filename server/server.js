const express = require("express")
const path = require("path")
const lol_player = require("./routes/lol_player")
const lol_match = require('./routes/lol_match')
const cors = require('cors')

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());

app.use('/lol/summoner',lol_player)
app.use('/lol/match',lol_match)
app.listen(PORT,(req,res) => {
    console.log("Listening on port ",PORT)
})