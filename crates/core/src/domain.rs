use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Product {
    pub id: String,
    pub canonical_name: String,
    pub brand: Option<String>,
    pub model: String,
    pub part_number: Option<String>,
    pub category: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Store {
    pub id: String,
    pub name: String,
    pub domain: Option<String>,
    pub seller_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Offer {
    pub id: String,
    pub product_id: String,
    pub store_id: String,
    pub seller_name: Option<String>,
    pub source_name: String,
    pub source_url: Option<String>,
    pub affiliate_url: Option<String>,
    pub cash_price_cents: i64,
    pub installment_price_cents: Option<i64>,
    pub shipping_cents: Option<i64>,
    pub availability: Option<String>,
}

impl Offer {
    pub fn total_cost_cents(&self) -> i64 {
        self.cash_price_cents.saturating_add(self.shipping_cents.unwrap_or(0))
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
pub struct Evidence {
    pub source_name: String,
    pub observed_at: String,
    pub source_url: Option<String>,
    pub exact_product_match: bool,
    pub source_verified: bool,
}

