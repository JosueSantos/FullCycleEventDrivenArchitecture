// TODO: Receber via Kafka os eventos gerados pelo Wallet Core
// TODO: Salvar no banco de dadosos Balances atualizados de cada conta
// TODO: Criar um endpoint /balances/{account_id}
// TODO: Gerar arquivo .http


//  internal
//      database : Acesso a Base de Dados
//      entity
//          balance
//  consumer
//      kafka
//  server
//      server
//  main.js : Executa o consumer e o server

const { Kafka } = require('kafkajs')
const Consumer = require('./src/consumer/consumer.js');

const server = require('./src/server/server.js');

const kafka = new Kafka({
    brokers: ['kafka:29092'],
    clientId: 'consumer-challenge'
})

const consumer = new Consumer(kafka);

consumer.isConnected().then((result) => {
    if (result) {
        console.log('Connected Kafka confirmed')
    }
});
