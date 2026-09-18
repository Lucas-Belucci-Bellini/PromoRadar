use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct PriceSnapshot {
    pub product_id: String,
    pub store_id: String,
    pub cash_price_cents: i64,
    pub shipping_cents: Option<i64>,
}

impl PriceSnapshot {
    pub fn total_cost_cents(&self) -> i64 {
        self.cash_price_cents
            .saturating_add(self.shipping_cents.unwrap_or(0))
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct DealAssessment {
    pub exact_product_match: bool,
    pub source_verified: bool,
    pub history_available: bool,
    pub total_cost_cents: i64,
}

pub fn assess(snapshot: &PriceSnapshot, exact_product_match: bool, source_verified: bool) -> DealAssessment {
    DealAssessment {
        exact_product_match,
        source_verified,
        history_available: false,
        total_cost_cents: snapshot.total_cost_cents(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn includes_shipping() {
        let p = PriceSnapshot {
            product_id: "p1".into(),
            store_id: "s1".into(),
            cash_price_cents: 10000,
            shipping_cents: Some(1500),
        };
        assert_eq!(p.total_cost_cents(), 11500);
    }

    #[test]
    fn handles_unknown_shipping() {
        let p = PriceSnapshot {
            product_id: "p1".into(),
            store_id: "s1".into(),
            cash_price_cents: 10000,
            shipping_cents: None,
        };
        assert_eq!(p.total_cost_cents(), 10000);
    }
}
