import { Link } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
  },
  link: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#333',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};

function WelcomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Todo App</h1>
      <p style={styles.description}>
        A simple and effective way to manage your tasks. Keep track of what needs to be done and stay organized.
      </p>
      <Link to="/todo" style={styles.link}>
        Go to Todo App
      </Link>
    </div>
  );
}

export default WelcomePage;
