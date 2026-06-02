---
title: DriveFi — Modelo de risco (pools)
type: risk-model
version: 0.1
---

# Modelo de risco — pools

Documento vivo para **premissas numéricas**. Versões devem ser datadas e aprovadas internamente (e por counsel quando afetar comunicação ao público).

## 1. Definições

- **APR bruto** — retorno implícito antes de perdas, taxas e provisões (definir fórmula).
- **APR líquido** — após custos operacionais e **provisão** para perdas esperadas.
- **NPL** — critério de inadimplência (ex.: dias de atraso > N).
- **LGD** — perda dado default, por tipo de garantia e canal de recuperação.

## 2. Provisão

- Percentual alvo da carteira **por vintage** ou homogêneo no MVP.
- Gatilhos de **step-up** (macro, cohort, concentração).
- O que o **LP vê** no app vs o que é contábil/regulatório (transparência sem violar sigilo de operações).

## 3. Liquidez

- Política de **saque**: imediato, fila, janelas.
- **Buffer** mínimo de caixa.
- Cenário de **corrida** (stress de redemptions).

## 4. Stress cases mínimos (painel)

| Cenário | Variável | Leitura de alerta |
|--------|----------|-------------------|
| Queda de preço usados | LTV médio | TBD |
| Spike NPL | taxa cohort | TBD |
| Funding mais caro | spread | TBD |
| Incidente contrato | pausa / perda | TBD |
| Mudança regulatória | atividade pausada | TBD |

Preencher **TBD** com thresholds numéricos após primeira carteira piloto.

## 5. UI

Enquanto dados forem **mock** (`/defi`), rotular como **estimativa/demo** ou ocultar — alinhado a [[docs/Comunicacao-Narrativa-Regulatoria]].

## Relacionados

- [[docs/PRD-MVP-DriveFi]]
- [[canvas/02-Mandala-Economia-Risco]]
