export default function About() {
  return (
    <section className="section reveal">
      <div className="container grid-2" style={{ alignItems: "center", gap: "40px" }}>
        {/* ТЕКСТ */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "36px", margin: 0 }}>О платформе</h2>
          <p style={{ marginTop: "10px" , fontSize: "18px", lineHeight: "1.6", opacity: 0.8 }}>
            Наша образовательная платформа создана для того, чтобы сделать
            обучение доступным, структурированным и практико-ориентированным.
            Мы помогаем развивать цифровые навыки с нуля до уверенного уровня.
          </p>
        </div>

        {/* КАРТИНКА */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="img/about.svg"
            alt="About illustration"
            style={{
              width: "100%",
              maxWidth: "320px",
            }}
          />
        </div>
      </div>
    </section>
  );
}