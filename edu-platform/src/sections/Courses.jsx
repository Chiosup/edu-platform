const courses = [
  {
    title: "UI/UX дизайн с нуля",
    img: "img/course1.jpg",
  },
  {
    title: "React для начинающих",
    img: "img/course2.jpg",
  },
  {
    title: "HTML и CSS: базовый курс",
    img: "img/course3.jpg",
  },
  {
    title: "Основы веб-дизайна",
    img: "img/course4.jpg",
  },
];

export default function Courses() {
  return (
    <section className="section reveal" id="courses">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Каталог</span>
          <h2>Курсы</h2>
          
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.title} className="card course-card">
              <img src={course.img} alt={course.title} />

              <div className="course-card-body">
                <h3>{course.title}</h3>
                <p>Онлайн-курс с практическими заданиями и понятной траекторией.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
