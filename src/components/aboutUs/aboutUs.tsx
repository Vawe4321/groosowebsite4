// components/AboutUsBody.tsx

import React, { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Grooso</h1>

      <h2>1. What is Grooso?</h2>
      <p>
        Grooso is India’s fast-growing NextGen commerce platform designed to revolutionize online shopping.
        It offers instant delivery, nationwide shipping, and product customization under one seamless ecosystem.
      </p>

      <h2>2. What can I buy on Grooso?</h2>
      <p>Grooso offers a wide variety of products and services including:</p>
      <ul>
        <li>Groceries and essentials</li>
        <li>Fashion, lifestyle, and beauty products</li>
        <li>Customized merchandise like T-shirts, mugs, and more</li>
        <li>Electronics, regional goods, and curated gifts</li>
      </ul>

      <h2>3. What makes Grooso unique?</h2>
      <p>Grooso stands out by combining convenience, speed, and personalization:</p>
      <ul>
        <li>20-minute delivery in select cities</li>
        <li>Pan-India shipping for most categories</li>
        <li>Grooso Creatify for designing your own products</li>
        <li>Access to regional specialties through verified sellers</li>
        <li>User-friendly experience with real-time tracking and secure payments</li>
      </ul>

      <h2>4. How does Grooso support personalization?</h2>
      <p>
        Through Grooso Creatify, users can design and order custom products like apparel, mugs, branding kits, and corporate gifts.
        This feature supports both personal and business needs.
      </p>

      <h2>5. What is Grooso’s mission?</h2>
      <p>
        Our mission is to become India’s most innovative, people-centric commerce ecosystem—by delivering speed,
        creativity, and trust in every order.
      </p>

      <h2>6. Where is Grooso located?</h2>
      <p>
        Grooso is headquartered in Rajahmundry, Andhra Pradesh, and serves customers nationwide through a growing network of
        local and regional partners.
      </p>

      <h2>7. How can I connect with Grooso?</h2>
      <ul>
        <li>Instagram: <a href="https://instagram.com/grooso.inc" target="_blank" rel="noopener noreferrer">@grooso.inc</a></li>
        <li>Twitter: <a href="https://twitter.com/GroosoIndia" target="_blank" rel="noopener noreferrer">@GroosoIndia</a></li>
        <li>YouTube & Pinterest: <a href="https://www.grooso.com" target="_blank" rel="noopener noreferrer">www.grooso.com</a></li>
        <li>Email: <a href="mailto:groosoindia@gmail.com">groosoindia@gmail.com</a></li>
      </ul>
    </div>
  );
};

export default AboutUs;
