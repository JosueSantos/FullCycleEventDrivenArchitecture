const express = require('express')
const app = express()
const port = 3003

app.get('/', (req,res) => {
    res.send('<h1>EDA Challenge</h1><a href="http://localhost:3003/">Challenge</a><br><a href="http://localhost:9021/">Control Center</a>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

