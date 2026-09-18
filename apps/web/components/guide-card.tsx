import Link from 'next/link';
import type { guides } from '../lib/demo-data';

type Guide = (typeof guides)[number];

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="card">
      <span className="tag">GUIA</span>
      <h3>{guide.title}</h3>
      <p>{guide.excerpt}</p>
      <Link className="button secondary" href={`/guias/${guide.slug}`}>Ler guia</Link>
    </article>
  );
}
