export type OfferStatus = 'demo' | 'observed' | 'verified' | 'expired' | 'unavailable';

export type OfferRecord = {
  id: string;
  productId: string;
  title: string;
  category: string;
  store: string;
  seller?: string;
  cashPriceCents: number;
  installmentPriceCents?: number;
  shippingCents?: number;
  currency: 'BRL';
  sourceName: string;
  sourceUrl?: string;
  affiliateUrl?: string;
  verifiedAt: string;
  status: OfferStatus;
};

export type ProductRecord = {
  id: string;
  brand?: string;
  model: string;
  partNumber?: string;
  canonicalName: string;
  category: string;
};
