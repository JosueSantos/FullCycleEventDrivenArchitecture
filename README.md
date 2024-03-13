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
Criar uma transação no arquivo ```client.http```. 
