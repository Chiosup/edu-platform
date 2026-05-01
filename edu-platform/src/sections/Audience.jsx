import { BookOpen, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Новички в IT",
  },
  {
    icon: GraduationCap,
    title: "Студенты",
  },
  {
    icon: Briefcase,
    title: "Дизайнеры, повышающие квалификацию",
  },
  {
    icon: TrendingUp,
    title: "Специалисты, меняющие профессию",
  },
];

export default function Audience() {
  return (
    <section className="section reveal" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2
          style={{
            fontSize: "40px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Кому подойдёт платформа
        </h2>

        <div className="items-grid">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="card"
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Иконка */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 20px",
                    borderRadius: "16px",
                    background: "rgba(59,130,246,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={28} color="#3b82f6" />
                </div>

                {/* Заголовок */}
                <h3
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.4",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}