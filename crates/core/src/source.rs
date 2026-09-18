use crate::PriceSnapshot;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum SourceError {
    #[error("source unavailable: {0}")]
    Unavailable(String),
    #[error("invalid source payload: {0}")]
    InvalidPayload(String),
}

pub trait OfferSourceAdapter {
    fn source_name(&self) -> &'static str;
    fn collect(&self) -> Result<Vec<PriceSnapshot>, SourceError>;
}
