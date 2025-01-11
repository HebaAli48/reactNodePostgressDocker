import React, { useState, useEffect } from 'react';
import { fetchInformation } from './api';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchInformation(page);
        setData(result);
        if (result.length > 0) {
          setCurrentId(result[0].id);
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page]);

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Information about Docker, Ansible, and Jenkins</h1>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {loading && <p style={styles.loading}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}

        {/* Grid Container for Image and List */}
        <div style={styles.gridContainer}>
          {/* Background Image */}
          <div style={styles.imageContainer}></div>

          {/* List of Information */}
          <ul style={styles.list}>
            {data.map((item) => (
              <li key={item.id} style={styles.card}>
                <h2 style={styles.title}>{item.title}</h2>
                <h3 style={styles.description}>{item.description}</h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        {currentId !== null && <p style={styles.counter}>INFO #: {currentId}</p>}
        <div style={styles.pagination}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 0}
            style={{ ...styles.button, ...(page <= 0 ? styles.disabledButton : {}) }}
          >
            Previous
          </button>
          <button onClick={() => setPage(page + 1)} style={styles.button}>
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© {currentYear} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #f0f8ff, #d1e9ff)', // Gradient background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  headerTitle: {
    fontSize: '2.5rem',
    margin: 0,
  },
  main: {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr', // Image takes 1/3, List takes 2/3
    gap: '20px',
    marginBottom: '20px',
    alignItems: 'start', // Align items to the top
  },
  imageContainer: {
    backgroundImage: 'url(https://newline.tech/wp-content/uploads/2023/04/DevOps-Engineer-what-is-it-and-what-do-they-do.png)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Fixed height for the image
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  loading: {
    fontSize: '1.2rem',
    color: '#007bff',
  },
  error: {
    fontSize: '1.2rem',
    color: 'red',
  },
  counter: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'left',
    transition: 'transform 0.2s ease-in-out',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#007bff',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
  pagination: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.2s ease-in-out',
  },
  disabledButton: {
    backgroundColor: '#d6d6d6',
    cursor: 'not-allowed',
  },
  footer: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9rem',
  },
};

export default App;