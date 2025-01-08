"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <Link href="/login" passHref> 
        <div style={styles.logo}>Survive</div>
      </Link>
      <div style={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <ul style={{ 
        ...styles.navLinks, 
        ...(isOpen ? styles.navLinksMobile : {}) 
      }}>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
         <li><Link href="/about" style={styles.link}>About</Link></li> {/* Updated Link component */}
      </ul>
      <Link href="/login" passHref> 
        <button style={styles.loginButton}>Log In</button>
      </Link>
      

    </nav>
  );
};

// Style CSS-in-JS
const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#2C2F33',
    color: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  hamburger: {
    display: 'none',
    fontSize: '1.8rem',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navLinksMobile: {
    display: 'flex',
    flexDirection: 'column' as const, // ✅ Poprawiony typ
    position: 'absolute',
    top: '60px',
    left: 0,
    width: '100%',
    backgroundColor: '#2C2F33',
    gap: '15px',
    padding: '20px',
    zIndex: 1000,
  },
  link: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  loginButton: {
    backgroundColor: '#1DA1F2',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
