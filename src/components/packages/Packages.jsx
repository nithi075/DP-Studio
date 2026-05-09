import { useState } from "react";
import "./Packages.css";

const birthdayPackages = [
  {
    title: "Birthday Silver",
    subtitle: "Simple Birthday Memories",
    price: "₹15,000",
    features: [
      "Traditional Photography",
      "Premium Album",
      "12×18 Frame",
      "Customized Calendar"
    ]
  },

  {
    title: "Birthday Gold",
    subtitle: "Complete Birthday Coverage",
    price: "₹25,000",
    badge: "Popular",
    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Premium Album",
      "12×18 Frame",
      "Pendrive Delivery"
    ]
  }
];

const weddingPackages = [
  {
    title: "Classic Wedding",
    subtitle: "Elegant Traditional Coverage",
    price: "₹29,999",
    features: [
      "Traditional Photography",
      "Premium Album (12×36)",
      "500 Edited Photos",
      "Traditional Frame",
      "6 Page Calendar",
      "Customized Photo Mug"
    ]
  },

  {
    title: "Premium Wedding",
    subtitle: "Photo + Video Coverage",
    price: "₹39,999",
    badge: "Most Popular",
    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Pendrive Video Output",
      "Premium Album (12×36)",
      "500 Edited Photos",
      "Traditional Frame",
      "6 Page Calendar",
      "Photo Mug"
    ]
  },

  {
    title: "Luxury Wedding",
    subtitle: "4K Cinematic Experience",
    price: "₹49,999",
    features: [
      "Traditional Photography",
      "Candid Photography",
      "Professional Light Setup",
      "Traditional 4K Video",
      "Premium Luxury Album Box",
      "500 Edited Photos",
      "Traditional & Candid Frames",
      "Calendar + Mug",
      "Pendrive Delivery"
    ]
  },

  {
    title: "Royal Wedding",
    subtitle: "Complete Premium Package",
    price: "₹54,999",
    badge: "Best Value",
    features: [
      "Traditional Photography",
      "Candid Photography",
      "Professional Light Setup",
      "Traditional Full HD Video",
      "Luxury Album Box",
      "Traditional Album (400 Photos)",
      "Candid Album (450 Photos)",
      "Traditional & Candid Frames",
      "Calendar + Mug",
      "Pendrive Delivery",
      "Canon & Sony Camera Setup"
    ]
  }
];

export default function Packages() {

  const [showBirthday, setShowBirthday] = useState(false);
  const [showWedding, setShowWedding] = useState(true);

  const whatsappNumber = "917305357303";

  const handleBooking = (pkg) => {

    const message =
      `Hello! I'm interested in the ${pkg.title} package (${pkg.price}). Please share more details.`;

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const renderPackages = (packages) => (

    <div className="packages-container">

      {packages.map((item, index) => (

        <div
          className={`package-card ${item.badge ? "featured" : ""}`}
          key={index}
        >

          {item.badge && (
            <div className="badge">
              {item.badge}
            </div>
          )}

          <div>

            <h3>{item.title}</h3>

            <p className="subtitle">
              {item.subtitle}
            </p>

            <div className="price-box">

              <h1>{item.price}</h1>

              <span className="event-text">
                / event
              </span>

            </div>

            <div className="features">

              {item.features.map((feature, i) => (

                <p key={i}>
                  {feature}
                </p>

              ))}

            </div>

          </div>

          <button
            className="package-btn"
            onClick={() => handleBooking(item)}
          >
            Book Now ↗
          </button>

        </div>

      ))}

    </div>
  );

  return (

    <section className="packages" id="packages">

      <div className="packages-header">

        <p>PRICING</p>

        <h2>
          Our Packages
        </h2>

      </div>

      {/* Birthday Dropdown */}

      <div className="dropdown-section">

        <div
          className="dropdown-title"
          onClick={() => setShowBirthday(!showBirthday)}
        >

          <h3>Birthday Packages</h3>

          <span>
            {showBirthday ? "−" : "+"}
          </span>

        </div>

        {showBirthday && renderPackages(birthdayPackages)}

      </div>

      {/* Wedding Dropdown */}

      <div className="dropdown-section">

        <div
          className="dropdown-title"
          onClick={() => setShowWedding(!showWedding)}
        >

          <h3>Wedding Packages</h3>

          <span>
            {showWedding ? "−" : "+"}
          </span>

        </div>

        {showWedding && renderPackages(weddingPackages)}

      </div>

    </section>
  );
}