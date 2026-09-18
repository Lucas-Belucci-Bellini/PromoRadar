# Deploy

## Web

Render:
- Runtime: Node
- Branch: main
- Root Directory: apps/web
- Build: npm install && npm run build
- Start: npm start
- Plano inicial: Free

## Ambiente

NEXT_PUBLIC_SITE_URL=https://promoradar.onrender.com
NEXT_PUBLIC_AFFILIATE_ACTIVE=false

## API

A API Rust será um serviço separado quando entrar em produção. Não deve ser simulada como se estivesse hospedada junto do frontend.

## Regra
A origem do código de produção é o GitHub. Pacotes locais são apenas artefatos auxiliares.
