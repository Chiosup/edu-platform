export default function CTA() {
  return (
    <section className="section reveal" id="cta">
      <div className="container cta-grid">
        <div className="cta-copy">
          <span className="eyebrow">Следующий шаг</span>
          <h2>Начните обучение уже сегодня</h2>
          <p>
            Присоединяйтесь к платформе, выбирайте удобный формат и двигайтесь к
            навыкам без лишнего стресса и перегруза.
          </p>
          <a className="btn btn-primary btn-large" href="#hero">
            Начать бесплатно
          </a>
        </div>

        <div className="cta-media card card-soft">
          <img src="img/cta.svg" alt="Иллюстрация обучения" />
        </div>
      </div>
    </section>
  );
}
