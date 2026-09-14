function StatCard({ title, value, icon }) {
  return (
    <article className="stat-card">
      <span className="stat-card__icon" aria-hidden="true">{icon}</span>
      <div><p className="stat-card__title">{title}</p><strong className="stat-card__value">{value}</strong></div>
    </article>
  );
}

export default StatCard;
