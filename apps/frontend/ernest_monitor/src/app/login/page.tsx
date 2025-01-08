"use client"; 

import React, { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(''); // Resetting the error

    if (!email || !password) {
      setError('Proszę wypełnić oba pola!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    alert('Logowanie zakończone sukcesem!');
  };

  return (
    <div>
    <Navbar/>
    <div style={styles.container}>
      <h2 style={styles.title}>Logowanie</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Wprowadź email"
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Wprowadź hasło"
          />
        </div>
        <button type="submit" style={styles.button}>Zaloguj się</button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center' as const, // Explicitly cast to 'center'
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const, // Explicitly cast to 'column'
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center' as const, // Explicitly cast to 'center'
    marginBottom: '10px',
  },
};

export default LoginForm;
