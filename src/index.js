
const express = require("express")
const app = express()

app.listen('8000', () => console.log('server is running at http:localhost:8000'))

app.get('/greet', (req, res) => {
    res.status(200).send('hello');
})

app.get('/play', (req, res) => {
    res.status(200).send('play!');
})