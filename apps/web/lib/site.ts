export const siteConfig = {
  name: 'PromoRadar',
  description: 'Comparação, contexto e conteúdo editorial para compras mais informadas.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  affiliateEnabled: process.env.NEXT_PUBLIC_AFFILIATE_ACTIVE === 'true',
} as const;
