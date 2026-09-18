import { siteConfig } from '../lib/site';

export function AffiliateNotice() {
  return (
    <div className="notice" role="note">
      <strong>Transparência:</strong>{' '}
      {siteConfig.affiliateEnabled
        ? 'alguns links podem gerar comissão por compras qualificadas.'
        : 'os links de afiliado estão desativados nesta versão demonstrativa.'}
    </div>
  );
}
