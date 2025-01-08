// app/about/About.tsx

"use client"; // Komponent klientowy

import React from 'react';

const AboutSection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>O aplikacji</h1>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          Nasza aplikacja jest platformą umożliwiającą użytkownikom zgłaszanie i śledzenie zagrożeń, takich jak klęski żywiołowe, pożary, powodzie oraz zarządzanie zasobami krytycznymi w czasie kryzysu. Działa na zasadzie społecznościowej, gdzie użytkownicy mogą zgłaszać zagrożenia, potwierdzać je, a także udostępniać informacje o dostępnych zasobach, takich jak woda, żywność, leki i urządzenia ratujące życie.
        </p>
        <h2 style={styles.subheader}>Funkcje aplikacji</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Rejestracja użytkowników i moderatorów</li>
          <li style={styles.listItem}>Zgłaszanie zagrożeń i przypisywanie ich do regionów</li>
          <li style={styles.listItem}>Zarządzanie zasobami krytycznymi</li>
          <li style={styles.listItem}>Interaktywna mapa zagrożeń z filtrami</li>
          <li style={styles.listItem}>Rola moderatora do nadzorowania treści i zgłoszeń</li>
        </ul>
        <h2 style={styles.subheader}>Bezpieczeństwo i zaufanie</h2>
        <p style={styles.paragraph}>
          Aplikacja zapewnia mechanizmy potwierdzania zgłoszeń zagrożeń przez innych użytkowników, co pozwala na ocenę istotności alarmu oraz wiarygodności zgłoszonych zasobów. System blokowania fałszywych informacji oraz zarządzania zgłoszeniami jest kluczowy dla zapewnienia bezpieczeństwa wszystkich użytkowników.
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#F9F9F9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#2C2F33',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'left',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '1.8rem',
    color: '#2C2F33',
    fontWeight: '600',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '10px',
  },
};

export default AboutSection;
