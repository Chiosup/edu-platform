export default function CTA() {
  return (
    <section className="section reveal" id="cta">
      <div className="container grid-2" style={{ alignItems: "center", gap: "40px" }}>
        {/* ТЕКСТ */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "40px" }}>Начни обучение уже сегодня</h2>

          <p style={{ marginTop: "10px", fontSize: "25px", lineHeight: "1.6" }}>
            Присоединяйся к платформе и развивай навыки в удобном формате
          </p>
          <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "#3b82f6",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          Начать бесплатно
        </button>
        </div>

        {/* КАРТИНКА */}
        <div style={{ flex: 1 }}>
          <img
            src="img/cta.svg"
            alt="learning"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}