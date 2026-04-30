const items = [
  {
    icon: "⚡",
    title: "Быстрое обучение",
    text: "Фокус на практике без лишней теории",
  },
  {
    icon: "🧠",
    title: "Структурированный контент",
    text: "Пошаговые модули обучения",
  },
  {
    icon: "🎯",
    title: "Результат ориентирован",
    text: "Ты получаешь реальные навыки",
  },
  {
    icon: "💬",
    title: "Поддержка",
    text: "Обратная связь по заданиям",
  },
];

export default function Benefits() {
  return (
    <section className="section reveal">
      <div className="container">
        <h2>Преимущества платформы</h2>

        {/* нестандартная сетка */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          {/* большая карточка */}
          <div className="card" style={{ gridRow: "span 2" }}>
            <div style={{ fontSize: "28px" }}>🚀</div>
            <h3 style={{ marginTop: "10px" }}>Современный подход к обучению</h3>
            <p style={{ marginTop: "10px" }}>
              Объединяем практику, структуру и удобный интерфейс для максимального результата.
            </p>
          </div>

          {items.map((item, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: "22px" }}>{item.icon}</div>
              <h3 style={{ marginTop: "8px" }}>{item.title}</h3>
              <p style={{ marginTop: "6px" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}