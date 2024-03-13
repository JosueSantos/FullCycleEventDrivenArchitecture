const express = require('express')
const DB = require('../internal/database/conect.js')

const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.json({
        challenge: 'http://localhost:3003/',
        getBalances: 'http://localhost:3003/balances/',
        getBalanceFrom: 'http://localhost:3003/balances/0e96d032-86fd-11ec-8b22-9a5ce86758a4',
        getBalanceTo: 'http://localhost:3003/balances/534b6b56-a988-11ec-b7e0-2b8e9696da41',
        controlcenter: 'http://localhost:9021/',
    })
})

app.get('/balances', (req, res) => {
    const db = new DB();

    db.getBalances()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json([]);
        });
})

app.get('/balances/:account_id', (req, res) => {
    const account_id = req.params.account_id;
    const db = new DB();
    
    db.getBalanceById(account_id)
        .then((result) => {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json([]);
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json([]);
        });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})