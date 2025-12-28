import { Link, Outlet } from 'react-router-dom';

const shellStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  navList: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
};

function Shell() {
  return (
    <div style={shellStyles.container}>
      <nav style={shellStyles.nav}>
        <ul style={shellStyles.navList}>
          <li>
            <Link to="/" style={shellStyles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/todo" style={shellStyles.navLink}>Todo</Link>
          </li>
        </ul>
      </nav>
      <main style={shellStyles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Shell;
