function UserCard({ name, bio, avatar, skills }) {
  return (
    <article className="user-card">
      <img className="user-card__avatar" src={avatar} alt={name + ' avatar'} />
      <div className="user-card__content">
        <h3>{name}</h3>
        <p>{bio}</p>
        <div className="skill-list" aria-label={name + ' skills'}>
          {skills.map((skill) => (
            <span className="skill-badge" key={name + '-' + skill}>{skill}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default UserCard;
