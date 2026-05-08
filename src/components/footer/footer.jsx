import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import "./footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const clickTimeout = useRef(null);
  const clickCount = useRef(0);
  const [previewImages, setPreviewImages] = useState([]);

  // Fetching a few images for the footer mini-gallery
  useEffect(() => {
    const fetchPreviews = async () => {
      try {
        const res = await axios.get("https://dp-backend-pg5r.onrender.com/gallery/all");
        // Taking last 5 images for a "Recent Work" feel
        setPreviewImages(res.data.slice(-5));
      } catch (error) {
        console.error("Footer gallery fetch error:", error);
      }
    };
    fetchPreviews();
  }, []);

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/dp_photography_tn76/", "_blank");
  };

  const handleContactClick = () => {
    window.open("https://wa.me/917305357303", "_blank");
  };

  // Secret Admin Access on Logo Double Click
  const handleAdminAccess = () => {
    clickCount.current += 1;
    if (clickCount.current === 2) {
      navigate("/admin");
      clickCount.current = 0;
      clearTimeout(clickTimeout.current);
    } else {
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0;
      }, 500);
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-curve-container">
        <div className="footer-inner-content">
          
          {/* Brand Identity */}
          <div className="footer-brand-section" onClick={handleAdminAccess}>
            <img src={logo} alt="The Wedding Craft" className="footer-main-logo" />
            <p className="brand-tagline">Capturing Stories, Creating Legacies</p>
          </div>

          {/* Mini Portfolio Preview */}
          {previewImages.length > 0 && (
            <div className="footer-mini-portfolio">
              <span className="section-label">Recent Stories</span>
              <div className="mini-grid">
                {previewImages.map((img) => (
                  <img 
                    key={img._id} 
                    src={img.imageUrl} 
                    alt="Portfolio Preview" 
                    onClick={() => navigate(`/galleryDetails/${img.category}`)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Navigation & Action */}
          <div className="footer-action-links">
            <div className="action-group">
              <button className="premium-outline-btn" onClick={handleInstagramClick}>
                <span className="btn-text">INSTAGRAM</span>
                <span className="btn-hover-effect"></span>
              </button>
              <button className="premium-outline-btn" onClick={handleContactClick}>
                <span className="btn-text">WHATSAPP</span>
                <span className="btn-hover-effect"></span>
              </button>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Legal & Copyright */}
          <div className="footer-bottom-info">
            <p className="copyright-text">
              © {new Date().getFullYear()} DP PHOTOGRAPHY. ALL RIGHTS RESERVED.
            </p>
            <div className="developer-credit">
              DESIGNED BY <span className="dev-name">SAM WEB DESIGNING</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}