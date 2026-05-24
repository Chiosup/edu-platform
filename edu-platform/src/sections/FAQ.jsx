import { useState } from "react";

const data = [
  {
    question: "Сколько времени занимает обучение?",
    answer: "Курсы можно проходить в удобном темпе. В среднем обучение занимает от двух до шести недель.",
  },
  {
    question: "Нужен ли опыт в дизайне или программировании?",
    answer: "Нет, программы подходят для новичков и стартуют с базовых понятий и практики.",
  },
  {
    question: "Будет ли практика?",
    answer: "Да, каждый модуль включает практические задания и небольшие проекты для закрепления навыка.",
  },
  {
    question: "Можно ли получить сертификат?",
    answer: "Да, после успешного завершения курса пользователь получает сертификат.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section reveal" id="faq">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Часто задаваемые вопросы</h2>
          
        </div>

        <div className="faq-list">
          {data.map((item, index) => (
            <button
              key={item.question}
              className={`card faq-item ${active === index ? "is-active" : ""}`}
              type="button"
              onClick={() => setActive(active === index ? null : index)}
            >
              <span className="faq-question">
                <strong>{item.question}</strong>
                <span className="faq-icon">{active === index ? "−" : "+"}</span>
              </span>

              <span className={`faq-answer ${active === index ? "open" : ""}`}>
                <span>{item.answer}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
