const express = require('express')
const axios = require('axios')
const app = express()
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.sendFile(__dirname, '/index.html')
})
app.get('/api/studios', (req, res) => {
    axios.get('https://api.themeparks.wiki/preview/parks/UniversalStudiosFlorida/waittime')
    .then((response) => {
        res.json(response.data);
        console.log(response.data);
    })
    .catch((err) => {
        console.error(err);
    })
})
app.listen(process.env.PORT || 3000)