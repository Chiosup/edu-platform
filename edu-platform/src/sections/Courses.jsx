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
    title: "HTML & CSS базовый курс",
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
        <h2>Курсы</h2>

        <div className="grid-2" style={{ marginTop: "20px" }}>
          {courses.map((c, i) => (
            <div key={i} className="card" style={{ padding: "0", overflow: "hidden" }}>
              
              {/* изображение */}
              <img
                src={c.img}
                alt={c.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* контент */}
              <div style={{ padding: "15px" }}>
                <h3 style={{ marginBottom: "8px" }}>{c.title}</h3>
                <p>Онлайн курс с практическими заданиями</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}