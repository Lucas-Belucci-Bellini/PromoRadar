'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { deals, formatBRL } from '../lib/demo-data';

export function SearchDeals() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(deals.map((deal) => deal.category)))];

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return deals.filter((deal) => {
      const matchesTerm = !term || (deal.title + ' ' + deal.category).toLowerCase().includes(term);
      const matchesCategory = category === 'Todos' || deal.category === category;
      return matchesTerm && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <div className="search-row">
        <input
          aria-label="Pesquisar ofertas"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Pesquisar produto ou categoria..."
        />
        <span className="result-count">{filtered.length} resultado(s)</span>
      </div>

      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? 'filter-active' : ''}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="cards">
        {filtered.map((deal) => (
          <article className="card" key={deal.slug}>
            <span className="tag">{deal.category}</span>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <strong className="price">{formatBRL(deal.price)}</strong>
            <Link className="button secondary" href={'/ofertas/' + deal.slug}>
              Ver análise
            </Link>
          </article>
        ))}
        {filtered.length === 0 ? (
          <div className="notice">Nenhum registro demonstrativo encontrado.</div>
        ) : null}
      </div>
    </div>
  );
}
