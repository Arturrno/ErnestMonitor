// components/SurvivalNews.tsx
"use client"; // Komponent klientowy
'use'
import React, { useState, useEffect } from 'react';

const SurvivalNews = () => {
  const [news, setNews] = useState([
    {
      title: 'Earthquake in California',
      link: 'https://www.example.com/earthquake-in-california',
      date: '2023-02-20',
      description: 'A powerful earthquake struck California, causing widespread damage and injuries.',
    },
    {
      title: 'Flood in Florida',
      link: 'https://www.example.com/flood-in-florida',
      date: '2023-02-15',
      description: 'A severe flood hit Florida, causing evacuations and property damage.',
    },
    {
      title: 'Forest Fire in Australia',
      link: 'https://www.example.com/forest-fire-in-australia',
      date: '2023-02-10',
      description: 'A massive forest fire burned in Australia, threatening wildlife and homes.',
    },
    {
      title: 'Hurricane in the Caribbean',
      link: 'https://www.example.com/hurricane-in-the-caribbean',
      date: '2023-02-05',
      description: 'A powerful hurricane struck the Caribbean, causing widespread destruction and loss of life.',
    },
    {
      title: 'Landslide in Japan',
      link: 'https://www.example.com/landslide-in-japan',
      date: '2023-01-30',
      description: 'A devastating landslide hit Japan, causing injuries and property damage.',
    },
    {
      title: 'Snowstorm in the Northeast',
      link: 'https://www.example.com/snowstorm-in-the-northeast',
      date: '2023-01-25',
      description: 'A severe snowstorm hit the Northeast, causing travel disruptions and power outages.',
    },
    {
      title: 'Tornado in the Midwest',
      link: 'https://www.example.com/tornado-in-the-midwest',
      date: '2023-01-20',
      description: 'A destructive tornado struck the Midwest, causing injuries and property damage.',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % news.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, news.length]);

  return (
    <div className="survival-news-container" style={{
      width: '1090px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '15px',
      }}>Survival News</h2>
      <div className="news-slider" style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
        }}>
          {news.map((newsItem, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '100%',
                flex: '1',
                transition: 'left 0.5s ease-in-out',
                transform: `translateX(${(currentIndex + index) % news.length * 100}%)`,
              }}
            >
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: '#333',
                  marginBottom: '10px',
                }}>
                  <a href={newsItem.link} style={{
                    color: '#1ABC9C',
                    textDecoration: 'none',
                  }}>{newsItem.title}</a>
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  marginBottom: '10px',
                }}>{newsItem.description}</p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#999',
                }}>{newsItem.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurvivalNews;