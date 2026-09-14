import './App.css';
import Badge from './Badge';
import ProgressBar from './ProgressBar';
import StatCard from './StatCard';
import UserCard from './UserCard';

const users = [
  { name: 'Ada Okafor', bio: 'Front-end developer building accessible interfaces.', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Ada%20Okafor', skills: ['React', 'JavaScript', 'A11y'] },
  { name: 'Malik Bello', bio: 'Product-minded engineer who loves clear experiences.', avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Malik%20Bello', skills: ['UI Design', 'CSS', 'Teamwork'] }
];

const progress = [
  { label: 'React fundamentals', percentage: 85, color: '#6366f1' },
  { label: 'Component composition', percentage: 70, color: '#14b8a6' },
  { label: 'Accessibility practice', percentage: 92, color: '#f59e0b' }
];

const statuses = [
  { text: 'Published', type: 'success' },
  { text: 'Needs review', type: 'warning' },
  { text: 'Draft', type: 'info' },
  { text: 'Blocked', type: 'error' }
];

const stats = [
  { title: 'Reusable components', value: '4', icon: '🧩' },
  { title: 'Props demonstrated', value: '14', icon: '⚡' },
  { title: 'Completed examples', value: '11', icon: '✅' },
  { title: 'Happy collaborators', value: '2', icon: '🤝' }
];

function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Week 5 · Monday · Lab 17</p>
        <h1>⚛️ React Component Gallery</h1>
        <p className="hero-copy">A small collection of reusable, prop-driven components.</p>
      </header>

      <section className="gallery-section" aria-labelledby="users-heading">
        <p className="section-kicker">Component 01</p><h2 id="users-heading">User Cards</h2>
        <div className="user-grid">{users.map((user) => <UserCard key={user.name} {...user} />)}</div>
      </section>

      <section className="gallery-section" aria-labelledby="progress-heading">
        <p className="section-kicker">Component 02</p><h2 id="progress-heading">Progress Bars</h2>
        <div className="progress-list">{progress.map((item) => <ProgressBar key={item.label} {...item} />)}</div>
      </section>

      <section className="gallery-section" aria-labelledby="badges-heading">
        <p className="section-kicker">Component 03</p><h2 id="badges-heading">Badges</h2>
        <div className="badge-showcase">{statuses.map((status) => <Badge key={status.text} {...status} />)}<Badge text="Default info badge" /></div>
      </section>

      <section className="gallery-section" aria-labelledby="stats-heading">
        <p className="section-kicker">Component 04</p><h2 id="stats-heading">Statistics</h2>
        <div className="stats-grid">{stats.map((stat) => <StatCard key={stat.title} {...stat} />)}</div>
      </section>
    </main>
  );
}

export default App;
