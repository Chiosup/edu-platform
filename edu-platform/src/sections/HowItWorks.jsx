const steps = [
  {
    title: "Выбор курса",
    text: "Пользователь быстро находит подходящий курс по понятным карточкам и структуре.",
  },
  {
    title: "Обучение",
    text: "Уроки проходят в удобном темпе без давления и информационного шума.",
  },
  {
    title: "Практика",
    text: "Каждый модуль закрепляется заданиями, чтобы знание сразу переходило в навык.",
  },
  {
    title: "Результат",
    text: "На выходе студент получает прикладной опыт и готовый проект для портфолио.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section reveal" id="how-it-works">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Как это работает</span>
          <h2>Сценарий обучения </h2>
          
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="card step-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
