import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Hero.css";

// Assets (Replace with your actual paths)
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds for a smooth cinematic feel
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handlePortfolioClick = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917305357303", "_blank");
  };

  return (
    <section className="hero" id="home">
      {/* BACKGROUND SLIDER WITH KEN BURNS EFFECT */}
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? "active-slide" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="hero-overlay">
        <div className="content-wrapper">
          <span className="sub-title">Luxury Wedding Photography</span>
          
          <h1>
            Capturing Love,<br />
            <span className="accent-text">One Frame at a Time</span>
          </h1>

          <p>
            From intimate moments to grand celebrations, we preserve every 
            emotion beautifully so your memories last forever.
          </p>

          <div className="hero-btns">
            <button className="hero-btn" onClick={handlePortfolioClick}>
              View Portfolio
            </button>
            <button className="hero-btn-outline" onClick={handleWhatsAppClick}>
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR (Optional but looks professional) */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}