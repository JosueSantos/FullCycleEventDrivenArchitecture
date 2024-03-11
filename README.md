# FullCycleEventDrivenArchitecture
### Desafio do curso FullCycle
### Modulo EDA - Event Driven Architecture

Desenvolva um microsserviço que seja capaz de receber via Kafka os eventos gerados pelo microsserviço "Wallet Core" e persistir no banco de dados os balances atualizados para cada conta.

- Crie um endpoint: "/balances/{account_id}" que exibe o balance atualizado.
- Gere o arquivo ".http" para realizarmos as chamadas em seu microsserviço da mesma forma que fizemos no microsserviço "wallet core"
- Disponibilize o microsserviço na porta: 3003.

# Execução
```
docker compose up -d --build
```

# Acesso 
Criar uma transação no arquivo ```./walletcore/api/client.http```. 
- Exemplo
```
POST http://localhost:8080/transactions HTTP/1.1
Content-Type: application/json

{
    "account_id_from": "0e96d032-86fd-11ec-8b22-9a5ce86758a4",
    "account_id_to": "534b6b56-a988-11ec-b7e0-2b8e9696da41",
    "amount": 2
}
