
"use client"; 

import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Resetowanie błędu

    if (!email || !password || !confirmPassword) {
      setError('Proszę wypełnić wszystkie pola!');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Hasła nie są zgodne!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Proszę podać poprawny email!');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    alert('Rejestracja zakończona sukcesem!');
  };

  return (
    <div style={styles.container}>
      <h2>Rejestracja</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Wprowadź email"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Wprowadź hasło"
          style={styles.input}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Potwierdź hasło"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Zarejestruj się</button>
      </form>
    </div>
  );
};

// Prosty styl CSS-in-JS
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default RegisterForm;
