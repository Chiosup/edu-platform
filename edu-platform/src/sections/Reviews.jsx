const reviews = [
  {
    name: "Алексей",
    text: "Очень понятная структура обучения. Материал подаётся последовательно, без перегруза, и знания сразу можно применять на практике.",
    avatar: "https://i.pravatar.cc/60?img=12",
  },
  {
    name: "Мария",
    text: "Платформа приятно удивила. Интерфейс помогает сосредоточиться на обучении, а не на поиске нужного раздела или следующего шага.",
    avatar: "https://i.pravatar.cc/60?img=32",
  },
];

export default function Reviews() {
  return (
    <section className="section reveal" id="reviews">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Отзывы</span>
          <h2>Отзывы студентов</h2>
          
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article key={review.name} className="card review-card">
              <div className="review-header">
                <img src={review.avatar} alt={review.name} />

                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-role">Студент платформы</div>
                </div>
              </div>

              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
