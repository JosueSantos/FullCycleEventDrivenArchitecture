const mysql = require('mysql');

let DB = class {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'mysql',
            user: 'root',
            password: 'root',
            database: 'wallet'
        });

        this.connection.connect();
    }

    async getBalances() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM balances', (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getBalanceById(account_id) {
        const sql = `SELECT * FROM balances WHERE account_id = ?`;
        
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [account_id], (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async insertOrUpdateBalance(balance) {
        const result = await this.getBalanceById(balance.getAccountId())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.log(error);
                return  [];
            });
            
        if (result.length) {
            this.updateBalance(balance);
        } else {
            this.insertBalance(balance);
        }
    }

    insertBalance(balance) {
        const query = `INSERT INTO balances (account_id, balance) VALUES (?, ?)`;

        this.connection.query(query, balance.getData());
    }

    updateBalance(balance) {
        const query = `UPDATE balances SET balance = ? WHERE account_id = ?`;
        const values = [balance.getBalance(), balance.getAccountId()];

        this.connection.query(query, values);
    }
}

module.exports = DB;