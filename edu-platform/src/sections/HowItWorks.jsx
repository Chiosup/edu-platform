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
    <section
      className="section reveal"
      style={{ padding: "100px 0" }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: "40px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Как это работает
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{
                textAlign: "center",
                padding: "30px 20px",
                borderRadius: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Номер */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                {i + 1}
              </div>

              {/* Заголовок */}
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </h3>

              {/* Текст */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  opacity: 0.7,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}