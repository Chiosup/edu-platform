export default function Hero() {
  return (
    <section className="section hero-section reveal" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Онлайн-обучение с фокусом на результат</span>
          <h1>Осваивайте digital-навыки быстрее и увереннее</h1>
          <p className="hero-lead">
            Современная образовательная платформа объединяет понятную структуру,
            практику и поддержку, чтобы путь от первых уроков до реальных навыков
            был спокойным и предсказуемым.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#cta">
              Начать обучение
            </a>
            <a className="btn btn-outline" href="#courses">
              Посмотреть курсы
            </a>
          </div>

          <ul className="hero-points" aria-label="Преимущества платформы">
            <li>Практические задания в каждом модуле</li>
            <li>Гибкий темп обучения без перегруза</li>
            <li>Портфолио и поддержка на всём маршруте</li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-glow" />
          <img src="img/hero.svg" alt="Иллюстрация онлайн-обучения" />
        </div>
      </div>
    </section>
  );
}
