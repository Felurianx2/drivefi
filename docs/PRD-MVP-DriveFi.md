---
title: DriveFi — PRD (MVP)
type: prd
version: 0.1
---

# PRD — MVP DriveFi

## Visão

Plataforma que conecta **liquidez (LP)** a **financiamento veicular** com **parcelas** para mutuários, com **transparência** de originação e riscos — sem afirmar retorno garantido até validação jurídica e modelo de negócio fechados.

## Personas

1. **Investidor / LP** — deposita stable na pool; acompanha posição e fluxo de retorno.
2. **Mutuário** — escolhe ativo, passa elegibilidade, assina contratos, paga parcelas.
3. **Operação / dealer** — cadastra veículo, documentação, dispara mint/onboarding on-chain (conforme desenho).
4. **Admin / risco** — painel de carteira, inadimplência, provisão.

## Jornadas (macro)

### LP

1. Landing → explicação de risco → conectar wallet.
2. KYC / suitability (nível a definir com compliance).
3. Depósito na pool → receipt / posição.
4. Acompanhamento (APR **realizado vs projetado**, histórico, saques conforme regras).

### Mutuário

1. Marketplace (dados reais via API/indexer no MVP alvo).
2. Simulação de parcelas → elegibilidade.
3. Contratação (off-chain + trechos on-chain se aplicável).
4. Pagamentos e suporte.

### Dealer / operação

1. Formulário ativo (`/admin` hoje) → integração **CarNFT** / registro.
2. Pipeline documental (VIN, RENAVAM, laudos).
3. Controle de estados: rascunho → aprovado → mintado → à venda.

## Escopo MVP (proposto)

- **Um** fluxo ponta-a-ponta em **whitelist** (poucos LPs, um veículo piloto).
- **Substituir mocks** em `/defi`, `/marketplace`, `/dashboard` prioritariamente para métricas exibidas ao público.
- **KYC** com um provedor e trilha de auditoria mínima.

## Fora do MVP

Mercado secundário de NFTs, múltiplas pools, app nativo, automação fiscal completa.

## Critérios de aceite (exemplos)

- Cada número exibido ao usuário tem **fonte** documentada (evento, API, manual operacional).
- Nenhum endereço de contrato **placeholder** em cópia de produção.
- Fluxo de depósito e de simulação de mutuário com estados de erro explícitos.

## Relacionados

- [[docs/Modelo-Risco-Pools]]
- [[docs/Compliance-Juridico]]
- [[canvas/01-Mandala-Produto-Jornadas]]
