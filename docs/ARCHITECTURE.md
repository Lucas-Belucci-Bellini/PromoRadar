# PromoRadar — Arquitetura

## Visão

O PromoRadar é um monólito modular com quatro fronteiras principais:

```
Next.js / TypeScript
        |
        v
API / contratos
        |
        v
Rust domain core
   |      |      |
pricing offers evidence
        |
        v
PostgreSQL
        |
        v
source adapters autorizados
```

## Responsabilidades

### Web
UX, SEO, páginas públicas, conteúdo editorial e consumo dos contratos de API.

### Core Rust
Regras determinísticas: normalização, custo total, comparação, contexto histórico e validação.

### API Rust
Endpoints operacionais, autenticação futura, ofertas, produtos, histórico e alertas.

### Data
PostgreSQL como fonte persistente. Snapshots históricos não devem ser sobrescritos.

### Adapters
Cada fonte externa fica atrás de um adapter próprio. O restante da aplicação não depende de HTML ou detalhes de uma loja.

### Monetization
URLs afiliadas, tags e estado comercial ficam separados dos dados de preço e não controlam ranking.

## Fluxo da oferta

SOURCE -> ADAPTER -> NORMALIZE -> EXACT MATCH -> PRICE/FREIGHT -> HISTORY -> ASSESSMENT -> PUBLIC OFFER

## Decisões

1. Next.js + TypeScript no produto público.
2. Rust no núcleo de domínio e API operacional.
3. PostgreSQL para persistência.
4. Monólito modular antes de microserviços.
5. Fonte externa sempre isolada por adapter.
6. Conteúdo editorial separado dos dados comerciais.
