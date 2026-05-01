const modules = [
  {
    title: "Введение в профессию",
    desc: "Погружение в сферу, обзор профессии и инструментов",
  },
  {
    title: "Основы UI/UX",
    desc: "Базовые принципы дизайна интерфейсов и пользовательского опыта",
  },
  {
    title: "Работа в Figma",
    desc: "Практика создания интерфейсов в Figma",
  },
  {
    title: "Практический проект",
    desc: "Создание полноценного проекта для портфолио",
  },
];

export default function Program() {
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
          Пример программы обучения
        </h2>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {modules.map((m, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                padding: "25px",
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
                  minWidth: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "#3b82f6",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>

              {/* Контент */}
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "8px",
                  }}
                >
                  {m.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    opacity: 0.7,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}