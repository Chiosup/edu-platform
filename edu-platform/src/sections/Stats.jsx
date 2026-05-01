export default function Stats() {
  return (
    <section
      className="section reveal"
      style={{ padding: "80px 0" }}
    >
      <div className="container">
        <div
          className="grid-3"
          style={{
            gap: "40px",
          }}
        >
          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              borderRadius: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                margin: 0,
              }}
            >
              10 000+
            </h2>
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                opacity: 0.7,
              }}
            >
              Студентов
            </p>
          </div>

          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ fontSize: "48px", margin: 0 }}>
              50+
            </h2>
            <p style={{ marginTop: "10px", fontSize: "18px", opacity: 0.7 }}>
              Курсов
            </p>
          </div>

          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "40px 20px",
              borderRadius: "20px",
            }}
          >
            <h2 style={{ fontSize: "48px", margin: 0 }}>
              95%
            </h2>
            <p style={{ marginTop: "10px", fontSize: "18px", opacity: 0.7 }}>
              Довольных пользователей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}