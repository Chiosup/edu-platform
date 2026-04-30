export default function CTA() {
  return (
    <section className="section reveal" id="cta">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* ТЕКСТ */}
        <div style={{ flex: 1 }}>
          <h2>Начни обучение уже сегодня</h2>

          <p style={{ marginTop: "10px" }}>
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
              borderRadius: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </section>
  );
}