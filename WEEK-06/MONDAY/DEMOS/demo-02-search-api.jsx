// Demo 02: Search with API
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '700px', margin: '0 auto' }}>
      <h1>🔍 Post Search</h1>

      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search posts..."
        style={{ width: '100%', padding: '12px', fontSize: '16px', borderRadius: '6px', border: '2px solid #ddd', marginBottom: '20px' }}
      />

      <p>{filtered.length} of {posts.length} posts</p>

      {loading ? <p>Loading...</p> : (
        filtered.slice(0, 20).map(post => (
          <div key={post.id} style={{ padding: '15px', background: '#f8f9fa', marginBottom: '10px', borderRadius: '6px' }}>
            <h3 style={{ margin: '0 0 8px' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#666' }}>{post.body.substring(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
