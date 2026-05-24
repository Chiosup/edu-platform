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
    <section className="section reveal" id="audience">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Для кого</span>
          <h2>Кому подойдет платформа</h2>
          <p>
            От новичков до специалистов, которые хотят сменить направление или
            систематизировать уже имеющийся опыт.
          </p>
        </div>

        <div className="items-grid">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="card audience-card">
                <div className="audience-icon">
                  <Icon size={28} color="#3b82f6" />
                </div>
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
