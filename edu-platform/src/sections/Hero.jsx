export default function Hero() {
  return (
    <section className="section reveal" id="hero" style={{ padding: "100px 0" }}>
      <div className="container grid-2 hero">
        {/* Текст */}
        <div>
          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            Обучайся онлайн быстрее и эффективнее
          </h1>

          <p
            style={{
              marginTop: "20px",
              maxWidth: "600px",
              fontSize: "25px",
              lineHeight: "1.6",
              opacity: 0.8,
            }}
          >
            Современная образовательная платформа для изучения
            digital-навыков с практикой, структурой и понятным
            интерфейсом.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "16px",
            }}
          >
            <button
              className="btn btn-primary"
              style={{
                padding: "14px 28px",
                fontSize: "16px",
                borderRadius: "12px",
              }}
              onClick={() =>
                document
                  .getElementById("cta")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Начать обучение
            </button>

            <button
              className="btn btn-outline"
              style={{
                padding: "14px 28px",
                fontSize: "16px",
                borderRadius: "12px",
              }}
              onClick={() =>
                document
                  .getElementById("courses")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Посмотреть курсы
            </button>
          </div>
        </div>

        {/* Картинка */}
  <div style={{ position: "relative" }}>
          {/* мягкий glow как в современных лендингах */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#3b82f6",
              borderRadius: "30px",
              filter: "blur(80px)",
              opacity: 0.2,
            }}
          />

          <img
            src="img/hero.svg"
            alt="education"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "650px",
              borderRadius: "24px",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}