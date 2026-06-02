---
title: DriveFi — Arquitetura & entregas (MVP)
type: engineering
version: 0.1
---

# Arquitetura & entregas — MVP

## Repositório (estado atual)

- **`scaffold-frontend/`** — monorepo Scaffold-ETH 2
  - `packages/nextjs` — app Next (`/`, `/defi`, `/marketplace`, `/dashboard`, `/admin`)
  - `packages/hardhat` — contratos e deploy
- **`smart-contracts/`** — contratos adicionais (confirmar integração com o build principal)
- **`frontend/`** — possível legado; evitar duas bases front sem decisão explícita

## Mapa de mocks → alvo

| Superfície | Hoje | Alvo MVP |
|------------|------|----------|
| `/defi` | valores estáticos, stake TODO | leitura pool + transações reais |
| `/marketplace` | array local | API / indexer |
| `/dashboard` | KPIs fixos | agregações reais ou omitir |
| `/admin` | mint console | contrato + validação backend |
| `/` | stats marketing | métricas auditáveis ou “em breve” |

## Milestones sugeridos

- **M0** — CI + deploy local estável
- **M1** — testnet + leitura on-chain para TVL/posição
- **M2** — KYC provedor + estados persistidos
- **M3** — marketplace com backend
- **M4** — piloto 1 veículo + relatório
- **M5** — hardening + auditoria + runbook produção

## Definição de “pronto” (release)

- Checklist de **segurança** (chaves, multisig, pausa)
- **Observabilidade** (logs, alertas de sync)
- **Copy** aprovada com [[docs/Compliance-Juridico]]

## Relacionados

- [[docs/PRD-MVP-DriveFi]]
- [[canvas/03-Mandala-Arquitetura-MVP]]
