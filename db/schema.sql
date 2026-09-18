CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  brand TEXT,
  model TEXT NOT NULL,
  part_number TEXT,
  canonical_name TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS stores (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT,
  seller_type TEXT NOT NULL DEFAULT 'store',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS offers (
  id UUID PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES products(id),
  store_id UUID NOT NULL REFERENCES stores(id),
  seller_name TEXT,
  source_name TEXT NOT NULL,
  source_url TEXT,
  affiliate_url TEXT,
  cash_price_cents BIGINT NOT NULL,
  installment_price_cents BIGINT,
  shipping_cents BIGINT,
  currency CHAR(3) NOT NULL DEFAULT 'BRL',
  availability TEXT,
  verified_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_offers_product_verified ON offers(product_id, verified_at DESC);
CREATE INDEX IF NOT EXISTS idx_offers_store_verified ON offers(store_id, verified_at DESC);
