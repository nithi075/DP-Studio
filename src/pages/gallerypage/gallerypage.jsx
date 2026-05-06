import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import Packages from "../../components/packages/Packages"; // Import unga Packages component
import "./gallerypage.css";

const GalleryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12); // Pagination state

  const categoryData = {
    all: { title: "The Master Collection", desc: "Explore our premium photography stories." },
    "traditional-wedding": { title: "Traditional Wedding", desc: "Beautiful traditional rituals captured forever.", isWedding: true },
    "destination-wedding": { title: "Destination Wedding", desc: "Luxury destination wedding memories.", isWedding: true },
    reception: { title: "Reception", desc: "Grand reception celebrations documented.", isWedding: true },
    "sangeet-haldi": { title: "Sangeet & Haldi", desc: "Fun-filled colorful wedding celebrations.", isWedding: true },
    "pre-wedding": { title: "Pre Wedding", desc: "Romantic cinematic love stories.", isWedding: true },
    maternity: { title: "Maternity Photography", desc: "Celebrating motherhood beautifully." },
    "baby-shoots": { title: "Baby Photography", desc: "Capturing little smiles forever." },
    bridal: { title: "Portrait Photography", desc: "Elegant portrait sessions." },
    birthday: { title: "Event Photography", desc: "Birthday and special event memories." },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVisibleCount(12); // Category maarumbothu count reset pannum
  }, [category]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://wc-backend-zr5t.onrender.com/gallery/all");
        setAllImages(res.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredImages = category && category !== "all"
    ? allImages.filter(img => img.category?.toLowerCase().trim() === category?.toLowerCase().trim())
    : [];

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 12); // Innoru 12 images add pannum
  };

  // Check if current category is wedding related
  const isWeddingCategory = categoryData[category]?.isWedding;

  return (
    <div className="gallery-page-container">
      <Navbar />

      <div className="gallery-main-wrapper">
        {/* Navigation Tabs */}
        <div className="text-tabs-wrapper">
          <div className="text-tabs-scroll">
            <span className={`nav-text-item ${(!category || category === "all") ? "active" : ""}`} 
                  onClick={() => navigate("/galleryDetails/all")}>All</span>
            {Object.keys(categoryData).map(key => key !== "all" && (
              <span key={key} className={`nav-text-item ${category === key ? "active" : ""}`}
                    onClick={() => navigate(`/galleryDetails/${key}`)}>{categoryData[key].title}</span>
            ))}
          </div>
        </div>

        {/* Header */}
        <header className="category-info fade-up">
          <span className="premium-label">Portfolio Collection</span>
          <h2>{categoryData[category]?.title || categoryData.all.title}</h2>
          <div className="accent-line"></div>
          <p className="category-desc">{categoryData[category]?.desc || categoryData.all.desc}</p>
        </header>

        {/* Gallery Content */}
        {loading ? (
          <div className="loader-container"><p>Curating your experience...</p></div>
        ) : !category || category === "all" ? (
          <div className="luxury-grid">
            {Object.keys(categoryData).map(key => key !== "all" && (
              <div key={key} className="collection-card fade-up" onClick={() => navigate(`/galleryDetails/${key}`)}>
                <div className="img-box">
                  {allImages.find(img => img.category?.toLowerCase().trim() === key.toLowerCase().trim())?.imageUrl ? (
                    <img src={allImages.find(img => img.category?.toLowerCase().trim() === key.toLowerCase().trim())?.imageUrl} alt={key} />
                  ) : <div className="empty-category-box"><h4>Coming Soon</h4></div>}
                  <div className="card-content-overlay">
                    <h3>{categoryData[key].title}</h3>
                    <span className="explore-btn">View Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="detail-view-wrapper">
            {filteredImages.length > 0 ? (
              <>
                <div className="luxury-grid">
                  {filteredImages.slice(0, visibleCount).map((image) => (
                    <div key={image._id} className="grid-item-detail fade-up">
                      <div className="img-wrapper">
                        <img src={image.imageUrl} alt={image.title} loading="lazy" />
                        <div className="minimal-overlay"><span>Enlarge</span></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* View More Button */}
                {visibleCount < filteredImages.length && (
                  <div className="view-more-container fade-up">
                    <button className="view-more-btn" onClick={handleViewMore}>
                      Load More Masterpieces
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-images-fallback">
                <h3>Gallery Under Curation</h3>
                <button className="back-home-btn" onClick={() => navigate("/galleryDetails/all")}>Return to Collections</button>
              </div>
            )}
          </div>
        )}

        {/* Packages Section - Only shows for Wedding categories OR "All" (Optional) */}
        {isWeddingCategory && (
          <div className="wedding-packages-integrated fade-up">
             <Packages />
          </div>
        )}

        {/* Default CTA for Non-Wedding pages */}
        {!isWeddingCategory && (
          <div className="gallery-package-cta">
            <h2>Love What You See?</h2>
            <p>Explore our premium packages designed for all your special events.</p>
            <button className="view-package-btn" onClick={() => navigate("/#packages")}>View All Packages →</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;