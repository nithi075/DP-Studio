import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

// Assets (Replace with your actual paths)
// Assuming these are all in src/assets
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img6 from "../assets/img6.jpg";

const GALLERY_ITEMS = [
  { title: "The Wedding Craft", category: "Signature", slug: "wedding", img: img2, desc: "Authentic moments captured with cinematic elegance." },
  { title: "Grand Receptions", category: "Celebration", slug: "reception", img: img3, desc: "Timeless tales of joy and grand celebrations." },
  { title: "Love Unfolds", category: "Pre-Wedding", slug: "pre-wedding", img: img1, desc: "Romantic storytelling in breathtaking landscapes." },
  { title: "Ethereal Portraits", category: "Bridal", slug: "bridal", img: img9, desc: "Highlighting the grace and detail of the bride." },
  {title : "Potrait Perfection", category : "Portrait", slug : "portrait", img : img8, desc : "Elegant portrait sessions that capture your essence."},
  {title : "Baby Shoot", category : "Baby", slug : "baby", img : img6, desc : "Pure innocence and tiny steps captured forever."}
];

export default function Gallery() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll every 6 seconds for better user experience
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleInteraction = (index, slug) => {
    if (index === activeIndex) {
      // Direct navigation on clicking the active central card
      navigate(`/galleryDetails/${slug}`);
    } else {
      // Set clicked side card as active
      setActiveIndex(index);
    }
  };

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <span className="p-tag">The Art of Storytelling</span>
        <h2>TIMELESS MOMENTS</h2>
        <div className="accent-line"></div>
      </div>

      <div className="portfolio-slider-container">
        <div className="portfolio-slider">
          {GALLERY_ITEMS.map((item, index) => {
            // Logic to determine card position based on activeIndex
            let position = "hidden";
            if (index === activeIndex) {
              position = "active";
            } else if (index === (activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length) {
              position = "left-side";
            } else if (index === (activeIndex + 1) % GALLERY_ITEMS.length) {
              position = "right-side";
            }

            return (
              <div
                key={index}
                className={`portfolio-card ${position}`}
                onClick={() => handleInteraction(index, item.slug)}
              >
                <div className="image-wrapper">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="card-overlay">
                    <span className="cat-label">{item.category}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                    <div className="view-story-btn">Explore Story</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pagination">
        {GALLERY_ITEMS.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}