create table `clients` (
    `id` varchar(255), 
    `name` varchar(255), 
    `email` varchar(255), 
    `created_at` date
);

create table `accounts` (
    `id` varchar(255), 
    `client_id` varchar(255), 
    `balance` int, 
    `created_at` date
);

create table `transactions` (
    `id` varchar(255), 
    `account_id_from` varchar(255), 
    `account_id_to` varchar(255), 
    `amount` int, 
    `created_at` date
);

create table `balances` (
    `account_id` varchar(255), 
    `balance` int
);