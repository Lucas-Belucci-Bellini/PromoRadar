import type { MetadataRoute } from 'next';
import { deals, guides } from '../lib/demo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = ['', '/ofertas', '/guias', '/metodologia', '/sobre', '/contato', '/alertas', '/privacidade', '/termos', '/transparencia'];

  return [
    ...routes.map((path) => ({ url: base + path, lastModified: new Date() })),
    ...deals.map((deal) => ({ url: base + '/ofertas/' + deal.slug, lastModified: new Date(deal.checkedAt) })),
    ...guides.map((guide) => ({ url: base + '/guias/' + guide.slug, lastModified: new Date() })),
  ];
}
