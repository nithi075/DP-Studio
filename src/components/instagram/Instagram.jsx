import React from "react";
import "./Instagram.css";

// Untha 6 images-a inge import pannikonga
import insta1 from "../../assets/instagram/img1.jpg";
import insta2 from "../../assets/instagram/img2.jpg";
import insta3 from "../../assets/instagram/img3.jpg";
import insta4 from "../../assets/instagram/img4.jpg";
import insta5 from "../../assets/instagram/img5.jpg";
import insta6 from "../../assets/instagram/img6.jpg";

export default function Instagram() {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <section className="insta-container">
      <div className="insta-header">
        <span className="insta-tag">ART LIVES IN THE</span>
        <h2 className="insta-title">INSTAGRAM</h2>
      </div>

      <div className="insta-main-content">
        {/* Left Side: 2 columns, 3 rows grid */}
        <div className="insta-photo-grid">
          {images.map((img, i) => (
            <div key={i} className="insta-photo-item">
              <img src={img} alt={`post-${i}`} />
            </div>
          ))}
        </div>

        {/* Right Side: Gold Box */}
        <div className="insta-gold-box">
          <div className="gold-content">
            <h3>FOLLOW OUR JOURNEY</h3>
            <p>Get inspired and follow us on Instagram</p>
           <a
  href="https://www.instagram.com/dp_photography_tn76/"
  target="_blank"
  rel="noopener noreferrer"
  className="insta-btn"
>
  <span className="btn-icon">📷</span>
  FOLLOW OUR JOURNEY
</a>
          </div>
        </div>
      </div>
    </section>
  );
}