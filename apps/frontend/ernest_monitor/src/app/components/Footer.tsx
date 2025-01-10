"use client"; // Komponent klientowy

import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2C2F33',
      color: '#F9F9F9',
      padding: '40px 20px',
      fontSize: '0.9rem',
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          flex: '1',
          margin: '10px',
          minWidth: '200px',
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}>About us</h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#CCCCCC',
            marginBottom: '10px',
          }}>
          Our site is an intermediate platform where risk and critical risk management exist. Let's take care of safety together.
          </p>
        </div>
        <div style={{
          flex: '1',
          margin: '10px',
          minWidth: '200px',
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}>Useful links</h2>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
          }}>
            <li style={{
              marginBottom: '10px',
            }}>
              <a href="/about" style={{
                color: '#1ABC9C',
                textDecoration: 'none',
              }}>About app</a>
            </li>
          </ul>
        </div>
        <div style={{
          flex: '1',
          margin: '10px',
          minWidth: '200px',
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#FFFFFF',
            marginBottom: '15px',
          }}>Contact</h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#CCCCCC',
            marginBottom: '10px',
          }}>
            Email: <a href="email" style={{
              color: '#1ABC9C',
              textDecoration: 'none',
            }}>survive.pl@gmail.com</a>
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#CCCCCC',
            marginBottom: '10px',
          }}>
            Phone Number: <a href="PhoneNumber" style={{
              color: '#1ABC9C',
              textDecoration: 'none',
            }}>+48 123 456 789</a>
          </p>
        </div>
      </div>
      <div style={{
        marginTop: '20px',
        borderTop: '1px solid #444',
        paddingTop: '10px',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#888',
          fontSize: '0.8rem',
        }}>
          &copy; {new Date().getFullYear()} Survive.pl. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;