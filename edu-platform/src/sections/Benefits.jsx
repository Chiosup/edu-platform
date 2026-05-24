const items = [
  {
    icon: "⚡",
    title: "Быстрое обучение",
    text: "Фокус на практике без перегруза лишней теорией и длинными вводными.",
  },
  {
    icon: "🧠",
    title: "Структурированный контент",
    text: "Пошаговые модули дают понятный маршрут без ощущения хаоса.",
  },
  {
    icon: "🎯",
    title: "Ориентация на результат",
    text: "Каждый блок ведёт к прикладному навыку, а не к абстрактному знанию.",
  },
  {
    icon: "💬",
    title: "Поддержка",
    text: "Пользователь получает обратную связь и может двигаться увереннее.",
  },
];

export default function Benefits() {
  return (
    <section className="section reveal" id="benefits">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Преимущества</span>
          <h2>Преимущества платформы</h2>
          
        </div>

        <div className="benefits-grid">
          <div className="card card-feature card-feature-lg">
            <div className="benefit-icon benefit-icon-lg">🚀</div>
            <h3>Современный подход к обучению</h3>
            <p>
              Практика, структура и визуально чистый интерфейс работают вместе,
              чтобы студент быстрее переходил от чтения к действию.
            </p>
          </div>

          {items.map((item) => (
            <div key={item.title} className="card card-feature">
              <div className="benefit-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
