const modules = [
  {
    title: "Введение в профессию",
    desc: "Погружение в сферу, обзор профессии и ключевых инструментов для старта.",
  },
  {
    title: "Основы UI/UX",
    desc: "Базовые принципы проектирования интерфейсов и пользовательского опыта.",
  },
  {
    title: "Работа в Figma",
    desc: "Практика создания интерфейсов и прототипов в одном рабочем пространстве.",
  },
  {
    title: "Практический проект",
    desc: "Сборка полноценного кейса для портфолио с реальным итоговым результатом.",
  },
];

export default function Program() {
  return (
    <section className="section reveal" id="program">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Программа</span>
          <h2>Пример программы обучения</h2>
          
        </div>

        <div className="program-list">
          {modules.map((module, index) => (
            <article key={module.title} className="card program-card">
              <div className="program-number">{index + 1}</div>
              <div className="program-copy">
                <h3>{module.title}</h3>
                <p>{module.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
