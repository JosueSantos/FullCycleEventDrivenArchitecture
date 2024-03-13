const DB = require('../internal/database/conect.js')
const Balance = require('../internal/entity/balance.js');


let Consumer = class {
    constructor(kafka) {
        this.kafka = kafka;
        this.consumer = this.kafka.consumer({
            groupId: 'wallet'
        })
    }

    async isConnected() {
        try {
            await this.consumer.subscribe({
                topic: 'balances'
            });
            
            await this.consumer.describeGroup();

            console.log("Connected Kafka");

            this.consume();

            return true;
        } catch (error) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            this.isConnected();
        }
    }

    async consume() {
        await this.consumer.run({
            eachMessage: async ({ message }) => {
                const db = new DB();
                
                const response = JSON.parse(message.value);

                const balance_from = new Balance(
                    response.Payload.account_id_from,
                    response.Payload.balance_account_id_from
                )
                db.insertOrUpdateBalance(balance_from);

                const balance_to = new Balance(
                    response.Payload.account_id_to,
                    response.Payload.balance_account_id_to
                )
                db.insertOrUpdateBalance(balance_to);
            },
        });
    }
}

module.exports = Consumer;