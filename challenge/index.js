const { Kafka } = require('kafkajs')

async function consumeMessages() {
    const kafka = new Kafka({
        brokers: ['kafka:29092'],
        clientId: 'consumer-challenge',
    })

    const consumer = kafka.consumer({
        groupId: 'wallet'
    })
    
    await consumer.subscribe({
        topics: ['balances'],
    });

    consumer.run({
        eachMessage: async ({ message }) => {

            const response = JSON.parse(message.value);

            console.log(`Received message: ${message.value}`);
            
            console.log(`${response.Name}`);
            console.log(`${response.Payload.account_id_from}`);
            console.log(`${response.Payload.account_id_to}`);
            console.log(`${response.Payload.balance_account_id_from}`);
            console.log(`${response.Payload.balance_account_id_to}`);
        },
    });
}

consumeMessages();