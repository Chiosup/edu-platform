import { useState } from "react";

const data = [
  {
    question: "Сколько времени занимает обучение?",
    answer: "Вы можете проходить курс в удобном темпе. В среднем — от 2 до 6 недель.",
  },
  {
    question: "Нужен ли опыт в дизайне или программировании?",
    answer: "Нет, курсы подходят для новичков и начинаются с базовых понятий.",
  },
  {
    question: "Будет ли практика?",
    answer: "Да, каждый модуль включает практические задания и проекты.",
  },
  {
    question: "Можно ли получить сертификат?",
    answer: "Да, после успешного завершения курса вы получите сертификат.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="section reveal">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>

        <div style={{ marginTop: "20px" }}>
          {data.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{ marginBottom: "10px", cursor: "pointer" }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{item.question}</strong>
                <span
                  style={{
                    transition: "0.3s",
                    transform: active === i ? "rotate(180deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                
>
  {active === i ? "−" : "+"}
</span>
              </div>

              <div className={`faq-answer ${active === i ? "open" : ""}`}>
  <p>{item.answer}</p>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}