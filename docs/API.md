# API

## Versionamento

A API operacional usará prefixo `/api/v1`.

## Endpoints iniciais

### GET /health
Verifica disponibilidade do serviço.

### GET /api/v1/offers
Lista ofertas com filtros de categoria, produto e estado.

### GET /api/v1/offers/:id
Retorna uma oferta com sua evidência e metadados.

### GET /api/v1/products/:id
Retorna o produto canônico e ofertas relacionadas.

### GET /api/v1/products/:id/history
Retorna snapshots históricos.

### POST /api/v1/alerts
Cria um alerta autenticado.

## Contrato

A API deve retornar estado explícito de frescor e fonte. Nunca afirmar que um registro é "tempo real" quando não houver garantia disso.

## Erros

Formato planejado:

```json
{
  "error": {
    "code": "OFFER_NOT_FOUND",
    "message": "Oferta não encontrada."
  }
}
```
