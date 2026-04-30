export default function Hero() {
  return (
    <section className="section reveal" id="hero">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Обучайся онлайн быстрее и эффективнее</h1>

        <p style={{ marginTop: "15px", maxWidth: "650px", marginInline: "auto" }}>
          Современная образовательная платформа для изучения digital-навыков
          с практикой, структурой и понятным интерфейсом.
        </p>

        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "12px" }}>
          <button className="btn btn-primary" onClick={() => document.getElementById("cta").scrollIntoView({ behavior: "smooth" })}>Начать обучение</button>
          <button className="btn btn-outline"  onClick={() => document.getElementById("courses").scrollIntoView({ behavior: "smooth" })}>Посмотреть курсы</button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
          <img
            src="img/hero.svg"
            alt="education"
            style={{ width: "50%", borderRadius: "16px", display: "block", margin: "40px auto 0" }}
          />
        </div>

    </section>
  );
}