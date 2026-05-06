import "./featured.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import weddingVideo from "../../assets/featured/wedding-video.mp4";

export default function Featured() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [videoSource, setVideoSource] = useState(weddingVideo);

  useEffect(() => {
    fetchFeaturedImages();
  }, []);

  const fetchFeaturedImages = async () => {
    try {
      const res = await api.get("/featured/all");

      console.log("Featured API Response:", res.data);

      const featuredData = res.data;

      if (!featuredData) {
        setGalleryImages([]);
        return;
      }

      // Dynamic video from backend
      if (
        featuredData.videoUrl &&
        featuredData.videoUrl.trim() !== ""
      ) {
        setVideoSource(featuredData.videoUrl);
      }

      if (
        !featuredData.images ||
        featuredData.images.length === 0
      ) {
        setGalleryImages([]);
        return;
      }

      // Cloudinary URLs already full URLs
      const allImages = featuredData.images.filter(
        (img) => typeof img === "string"
      );

      setGalleryImages(allImages);
    } catch (error) {
      console.error(
        "Error fetching featured images:",
        error
      );
    }
  };

  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/dp_photography_tn76/",
      "_blank"
    );
  };

  return (
    <section className="featured">
      <span className="tag">
        OUR FAVORITE MOMENTS
      </span>

      <h2>FEATURED WEDDING</h2>

      {/* Video */}
      <div className="featured-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="featured-video"
        >
          <source
            src={videoSource}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gallery */}
      <div className="featuredGrid">
        {galleryImages.length > 0 ? (
          <>
            {galleryImages
              .slice(0, 3)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`featured-${index}`}
                />
              ))}

            <div className="quote-box">
              MEMORIES
              <br />
              THAT LAST
              <br />
              FOREVER
            </div>

            {galleryImages
              .slice(3)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`featured-${index + 3}`}
                />
              ))}
          </>
        ) : (
          <div className="no-images">
            <p>No featured images available</p>
          </div>
        )}
      </div>

      <button
        className="featured-btn"
        onClick={handleInstagramRedirect}
      >
        View More ↗
      </button>
    </section>
  );
}