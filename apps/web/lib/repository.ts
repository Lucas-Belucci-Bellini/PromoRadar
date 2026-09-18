import type { Deal } from './demo-data';

export interface CatalogRepository {
  listDeals(): Promise<Deal[]>;
  findDeal(slug: string): Promise<Deal | undefined>;
}

export class DemoCatalogRepository implements CatalogRepository {
  async listDeals() {
    const { deals } = await import('./demo-data');
    return deals;
  }

  async findDeal(slug: string) {
    const { findDeal } = await import('./demo-data');
    return findDeal(slug);
  }
}

export const catalogRepository: CatalogRepository = new DemoCatalogRepository();
