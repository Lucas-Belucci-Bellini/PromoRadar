export const metadata = { title: 'Alertas' };

export default function Alertas() {
  return (
    <section className="page">
      <div className="container">
        <span className="eyebrow">ALERTAS</span>
        <h1 className="page-title">Avise quando o preço atingir sua meta.</h1>
        <article className="article">
          <p className="lead">O fluxo está planejado para a próxima fase: produto, preço-alvo, frequência de verificação e notificação.</p>
          <div className="notice">Nenhum e-mail é coletado ou enviado nesta versão.</div>
        </article>
      </div>
    </section>
  );
}
