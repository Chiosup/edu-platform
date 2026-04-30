const steps = [
  {
    title: "Выбор курса",
    text: "Вы выбираете подходящий курс из каталога",
  },
  {
    title: "Обучение",
    text: "Проходите уроки в удобном темпе",
  },
  {
    title: "Практика",
    text: "Выполняете задания и закрепляете знания",
  },
  {
    title: "Результат",
    text: "Получаете навыки и готовый результат",
  },
];

export default function HowItWorks() {
  return (
    <section className="section reveal">
      <div className="container">
        <h2>Как это работает</h2>

        <div className="grid-4" style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
          {steps.map((step, i) => (
            <div key={i} className="card">
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {i + 1}
              </div>

              <h3 style={{ marginBottom: "8px" }}>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}