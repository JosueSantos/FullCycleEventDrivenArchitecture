
let Balance = class {
    constructor(account_id, balance) {
        this.account_id = account_id;
        this.balance = balance;
    }

    getAccountId() {
        return this.account_id;
    }

    getBalance() {
        return this.balance;
    }

    getData() {
        return [this.account_id, this.balance];
    }
}

module.exports = Balance;