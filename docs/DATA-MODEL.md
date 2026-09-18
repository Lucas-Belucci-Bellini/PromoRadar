# Modelo de dados

## Product
Produto canônico: marca, modelo, part number, variante e categoria.

## Store
Origem comercial: nome, domínio e tipo de vendedor.

## Offer
Condição comercial de um produto em uma origem:
- produto
- loja
- vendedor
- fonte
- URL normal
- URL afiliada, quando permitida
- preço à vista
- preço parcelado
- frete
- disponibilidade
- verificado em

## PriceSnapshot
Cada coleta real relevante deverá virar um snapshot histórico. O passado não deve ser sobrescrito para fabricar uma tendência.

## Alert
Produto + preço alvo + estado + canal de notificação.

## Regra central
Só comparar ofertas semanticamente equivalentes. Modelo, capacidade, variante, vendedor e condição de pagamento devem ser preservados.
