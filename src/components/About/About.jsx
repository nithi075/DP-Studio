import React, { useEffect } from "react";
import "./About.css";

import mainImg from "../../assets/about1.png";
import smallImg from "../../assets/about2.jpg";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-on-scroll');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Side: Minimal Content */}
        <div className="about-content-box about-reveal">
          <div className="about-header">
            <span className="about-subtitle">The Vision</span>
            <h2 className="about-title">CAPTURING THE <br /><span>ESSENCE OF LIFE</span></h2>
          </div>

          <div className="about-body-text">
            <p className="highlight-text">
              We are a team of passionate photographers dedicated to freezing 
              fleeting moments into eternal memories.
            </p>
            <p>
              Our approach is simple: we blend technical mastery with an 
              artistic eye to document your story in its most authentic form. 
              Whether it's a grand celebration or an intimate portrait, we focus 
              on the beauty of the present.
            </p>
            <p>
              Driven by excellence and a love for visual storytelling, we ensure 
              every frame speaks a thousand words, delivering cinematic visuals 
              that stay with you forever.
            </p>
          </div>

          <div className="about-footer">
            <div className="signature-box">
              <span className="signature-text">DP PHOTOGRAPHY</span>
              <p>Professional Photography Studio</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        {/* <div className="about-visuals about-reveal">
          {/* <div className="image-stack">
            <div className="main-img-container">
              <img src={mainImg} alt="Photography Mastery" className="about-main-img" />
              <div className="floating-experience-card">
                <span className="exp-number">08</span>
                <span className="exp-label">Years of <br />Experience</span>
              </div>
            </div>
            
            {/* <div className="secondary-img-container">
              <img src={smallImg} alt="Behind the Lens" className="about-small-img" />
              <div className="image-border-decoration"></div>
            </div> */}
          {/* </div> */} 
        {/* </div>  */}

      </div>
    </section>
  );
}