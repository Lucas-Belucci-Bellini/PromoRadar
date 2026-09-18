export type Deal = { slug: string; title: string; category: string; store: string; price: number; previousPrice?: number; status: 'demo' | 'observed' | 'verified'; note: string; sourceLabel: string; checkedAt: string; description: string; };

export const deals: Deal[] = [
  { slug: 'notebook-estudos-desenvolvimento', title: 'Notebook para estudos e desenvolvimento', category: 'Notebooks', store: 'Catálogo demonstrativo', price: 2499, previousPrice: 2899, status: 'demo', note: 'Registro usado somente para demonstrar a interface.', sourceLabel: 'Demo', checkedAt: '2026-09-01T12:00:00Z', description: 'Exemplo de comparação de memória, armazenamento, tela e garantia.' },
  { slug: 'ssd-nvme-1tb', title: 'SSD NVMe 1 TB', category: 'Armazenamento', store: 'Catálogo demonstrativo', price: 399, previousPrice: 469, status: 'demo', note: 'Registro usado somente para demonstrar a interface.', sourceLabel: 'Demo', checkedAt: '2026-09-01T12:00:00Z', description: 'Exemplo de análise de capacidade, interface, desempenho e custo por GB.' },
  { slug: 'monitor-24-full-hd', title: 'Monitor 24\" Full HD', category: 'Periféricos', store: 'Catálogo demonstrativo', price: 699, previousPrice: 799, status: 'demo', note: 'Registro usado somente para demonstrar a interface.', sourceLabel: 'Demo', checkedAt: '2026-09-01T12:00:00Z', description: 'Exemplo de comparação de painel, atualização, conectividade e ergonomia.' }
];

export const guides = [
  { slug: 'como-comparar-precos', title: 'Como comparar preços sem cair em falsa promoção', excerpt: 'Preço anterior, variante, frete e histórico importam tanto quanto a porcentagem de desconto.' },
  { slug: 'como-escolher-notebook', title: 'Como escolher um notebook para estudar e programar', excerpt: 'Memória, armazenamento, tela, CPU e garantia.' },
  { slug: 'ssd-nvme-guia', title: 'SSD NVMe: o que realmente muda no dia a dia', excerpt: 'Capacidade, interface, temperatura, durabilidade e custo por GB.' },
  { slug: 'monitor-para-estudos', title: 'Monitor para estudos: o que comparar', excerpt: 'Tamanho, resolução, painel, atualização e ergonomia.' },
  { slug: 'frete-no-preco', title: 'Por que frete faz parte da comparação', excerpt: 'O custo final pode mudar quando o frete entra na conta.' },
  { slug: 'parcelamento', title: 'Preço à vista e parcelado não são a mesma métrica', excerpt: 'Como registrar as duas condições sem confundir o usuário.' },
  { slug: 'vendedor-marketplace', title: 'Como avaliar ofertas de marketplace', excerpt: 'Vendedor, garantia e nota fiscal fazem parte da análise.' },
  { slug: 'historico-de-precos', title: 'Como interpretar histórico de preços', excerpt: 'Histórico dá contexto, mas não garante que uma compra seja vantajosa.' },
  { slug: 'alertas-de-preco', title: 'Como funcionam alertas de preço', excerpt: 'Produto, preço-alvo, verificação e notificação.' },
  { slug: 'compras-de-pc', title: 'Como montar um orçamento de PC baseado em preço real', excerpt: 'Modelo de tabela para componente, variante, loja e custo total.' }
] as const;

export function formatBRL(value: number) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value); }
export function findDeal(slug: string) { return deals.find((deal) => deal.slug === slug); }
export function findGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
