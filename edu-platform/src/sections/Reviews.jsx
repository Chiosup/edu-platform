const reviews = [
  {
    name: "Алексей",
    text: "Очень понятная структура обучения. Материал подаётся последовательно, без перегруза, и сразу можно применять знания на практике. Особенно понравились задания после каждого блока.",
    avatar: "https://i.pravatar.cc/60?img=12",
  },
  {
    name: "Мария",
    text: "Платформа приятно удивила. Всё интуитивно понятно, нет лишней информации, а интерфейс помогает сосредоточиться на обучении. Хороший баланс теории и практики.",
    avatar: "https://i.pravatar.cc/60?img=32",
  },
];
export default function Reviews() {
  return (
    <section className="section reveal">
      <div className="container">
        <h2>Отзывы</h2>

        <div
  className="grid-2"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "20px",
  }}
>
          {reviews.map((r, i) => (
  <div key={i} className="card">

    {/* HEADER: аватар + имя */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "10px",
      }}
    >
      <img
        src={r.avatar}
        alt={r.name}
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div>
        <div style={{ fontSize: "16px", fontWeight: "600" }}>
          {r.name}
        </div>
        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
          Студент платформы
        </div>
      </div>
    </div>

    {/* TEXT */}
    <p style={{ marginTop: "8px", lineHeight: "1.6" }}>
      {r.text}
    </p>

  </div>
))}
        </div>
      </div>
    </section>
  );
}

