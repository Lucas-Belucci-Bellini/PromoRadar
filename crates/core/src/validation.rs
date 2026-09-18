use thiserror::Error;
use crate::domain::Offer;

#[derive(Debug, Error, PartialEq, Eq)]
pub enum ValidationError {
    #[error("cash price must be positive")]
    InvalidCashPrice,
    #[error("installment price cannot be negative")]
    InvalidInstallmentPrice,
    #[error("shipping cannot be negative")]
    InvalidShipping,
    #[error("source name is required")]
    MissingSource,
}

pub fn validate_offer(offer: &Offer) -> Result<(), ValidationError> {
    if offer.cash_price_cents <= 0 {
        return Err(ValidationError::InvalidCashPrice);
    }
    if offer.installment_price_cents.is_some_and(|value| value < 0) {
        return Err(ValidationError::InvalidInstallmentPrice);
    }
    if offer.shipping_cents.is_some_and(|value| value < 0) {
        return Err(ValidationError::InvalidShipping);
    }
    if offer.source_name.trim().is_empty() {
        return Err(ValidationError::MissingSource);
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn offer() -> Offer {
        Offer {
            id: "o1".into(),
            product_id: "p1".into(),
            store_id: "s1".into(),
            seller_name: None,
            source_name: "demo".into(),
            source_url: None,
            affiliate_url: None,
            cash_price_cents: 10000,
            installment_price_cents: Some(10000),
            shipping_cents: Some(1500),
            availability: Some("in_stock".into()),
        }
    }

    #[test]
    fn accepts_valid_offer() {
        assert_eq!(validate_offer(&offer()), Ok(()));
    }

    #[test]
    fn rejects_invalid_cash_price() {
        let mut value = offer();
        value.cash_price_cents = 0;
        assert_eq!(validate_offer(&value), Err(ValidationError::InvalidCashPrice));
    }
}
