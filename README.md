# PromoRadar

Plataforma de descoberta, comparação e análise de ofertas.

> Estado atual: MVP editorial + catálogo demonstrativo. Os dados de demonstração não representam preços em tempo real.

## Arquitetura

```
Next.js/TypeScript
      │
      ▼
API / contratos
      │
      ▼
Rust domain core
      │
      ├── pricing
      ├── offers
      └── evidence
      │
      ▼
PostgreSQL
      │
      ▼
adapters de fontes autorizadas
```

## Estrutura

- `apps/web` — produto público Next.js.
- `crates/core` — domínio e regras de negócio em Rust.
- `crates/api` — API HTTP Rust.
- `db` — modelo relacional e migrações.
- `docs` — decisões, metodologia, segurança e roadmap.
- `infra` — configuração operacional.

## Princípios

- Nunca inventar preço, disponibilidade ou avaliação.
- Registrar fonte e horário para dados reais.
- Comparar variantes exatas.
- Separar preço à vista e parcelamento.
- Considerar frete quando disponível.
- Não usar comissão de afiliado como justificativa para manipular ranking.
- Usar fontes e APIs autorizadas e respeitar os termos de cada plataforma.
- Preferir monólito modular antes de microserviços.

## Status

| Área | Estado |
|---|---|
| Frontend público | ativo |
| Conteúdo editorial | ativo |
| Catálogo demonstrativo | ativo |
| API demo | ativo |
| Núcleo Rust | estruturado |
| PostgreSQL | planejado |
| Histórico real | planejado |
| Fontes autorizadas | planejado |
| Amazon Associados | preparado, monetização desligada |
| Alertas | planejado |

## Desenvolvimento

```bash
cd apps/web
npm install
npm run dev
```

Rust:

```bash
cargo test --workspace
cargo run -p promoradar-api
```

## Render

- Runtime: Node
- Root Directory: `apps/web`
- Build: `npm install && npm run build`
- Start: `npm start`

Consulte `docs/DEPLOY.md`.
