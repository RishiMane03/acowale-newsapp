import React, { useState, useEffect } from 'react';
import './hero.css';
import Card from './Card';

function Hero({ allNews }) {

  return (
    <div>
      <section className="hero">
        <div className="container">
          {allNews.slice(0, 4).map((article, index) => (
            <Card key={index} item={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
