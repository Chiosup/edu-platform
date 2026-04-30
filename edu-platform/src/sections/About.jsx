export default function About() {
  return (
    <section className="section reveal">
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
          <h2>О платформе</h2>
          <p style={{ marginTop: "10px" }}>
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