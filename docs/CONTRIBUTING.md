# Contribuição

## Regra principal

Toda mudança que altera arquitetura deve atualizar a documentação correspondente.

## Frontend

- Componentes reutilizáveis em `apps/web/components`.
- Dados e contratos em `apps/web/lib`.
- Rotas públicas em `apps/web/app`.

## Rust

- Domínio em `crates/core`.
- API em `crates/api`.
- Regras de negócio não devem depender de detalhes de UI.

## Commits

Use mensagens objetivas, por exemplo:
- feat: nova capacidade
- fix: correção
- refactor: reorganização
- docs: documentação
- arch: mudança estrutural
- ci: automação

## Validação

Antes de considerar uma etapa concluída:

```bash
cd apps/web && npm run typecheck && npm run build
cargo test --workspace
```

Quando o ambiente local não permitir uma dessas validações, isso deve ser registrado no relatório em vez de inventar um resultado.
