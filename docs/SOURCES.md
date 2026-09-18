# Fontes e adapters

O PromoRadar não deve depender diretamente de uma loja, comparador ou programa de afiliados dentro do domínio.

## Fluxo

```
Fonte externa
   ↓
Adapter
   ↓
Payload validado
   ↓
Normalização
   ↓
Core Rust
   ↓
Oferta pública
```

## Contrato

Cada adapter deve saber:
- nome da fonte;
- como coletar ou receber dados;
- como validar resposta;
- como transformar o payload em entidades canônicas;
- como reportar indisponibilidade.

## Regras

- Respeitar termos, políticas, robots e APIs autorizadas.
- Não fazer scraping agressivo.
- Não tratar HTML como contrato estável.
- Não expor credenciais.
- Registrar timestamp de coleta.
- Não permitir que uma fonte defina sozinha o ranking final.

## Primeiras integrações planejadas

1. fontes próprias/digitadas manualmente para validação do domínio;
2. APIs autorizadas;
3. parceiros e programas de afiliados compatíveis com o projeto.
