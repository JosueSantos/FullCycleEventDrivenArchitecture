# FullCycleEventDrivenArchitecture
Desafio do curso FullCycle | Modulo EDA - Event Driven Architecture

# Execução
```
docker compose up -d --build
```

# Acesso 
Fonte: http://localhost:8080

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
