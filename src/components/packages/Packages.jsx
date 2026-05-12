import { useEffect, useState } from "react";
import "./Packages.css";

/* =========================
   BIRTHDAY PACKAGES
========================= */

const birthdayPackages = [
  {
    title: "Birthday Silver",
    subtitle: "Simple Birthday Memories",
    price: "₹15,000",
    features: [
      "Traditional Photography",
      "Premium Album",
      "12×18 Frame",
      "Customized Calendar",
    ],
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
      "Pendrive Delivery",
    ],
  },
];

/* =========================
   ENGAGEMENT PACKAGES
========================= */

const engagementPackages = [
  {
    title: "Ceremony Essential",
    subtitle: "Package - 01",
    price: "₹25,000",
    features: [
      "Traditional Photo (350 Photos)",
      "Traditional Album (12×36)",
      "Traditional Frame (12×18)",
      "1 Customized Calendar",
    ],
  },

  {
    title: "Ceremony Classic",
    subtitle: "Package - 02",
    price: "₹35,000",
    badge: "Popular",
    features: [
      "Traditional Photo",
      "Traditional Video",
      "Album (12×36 - 350 Photos)",
      "1 Photo Frame",
      "1 Calendar",
      "Pendrive Delivery",
    ],
  },

  {
    title: "Ceremony Grand",
    subtitle: "Package - 03",
    price: "₹45,000",
    features: [
      "Traditional & Candid Photos",
      "Traditional Video",
      "Album (12×36 - 400 Photos)",
      "1 Traditional Frame",
      "1 Candid Frame",
      "1 Calendar",
      "Pendrive Delivery",
    ],
  },
];

/* =========================
   WEDDING PACKAGES
========================= */

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
      "Customized Photo Mug",
    ],
  },

  {
    title: "Premium Wedding",
    subtitle: "Photo + Video Coverage",
    price: "₹39,999",
    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Pendrive Video Output",
      "Premium Album (12×36)",
      "500 Edited Photos",
      "Traditional Frame",
      "6 Page Calendar",
    ],
  },

  {
    title: "Royal Wedding",
    subtitle: "Complete Premium Package",
    price: "₹54,999",
    features: [
      "Traditional & Candid Photography",
      "Professional Light Setup",
      "Traditional Full HD Video",
      "Luxury Album Box",
      "Traditional & Candid Albums",
      "Traditional & Candid Frames",
      "Calendar + Mug",
      "Pendrive Delivery",
    ],
  },

  {
    title: "Elite Wedding Story",
    subtitle: "The Ultimate Experience",
    price: "₹84,999",
    badge: "Premium",
    features: [
      "Traditional & Candid Photography",
      "Traditional & Candid 4K Video",
      "Premium Luxury Album Box (12x36 & 16x24)",
      "Godox AD200/600 Professional Lighting",
      "5 Min Highlight Video",
      "6 Page Calendar & Photo Mug",
      "Traditional & Candid Frames",
    ],
  },

  {
    title: "The Grand DP Signature",
    subtitle: "Luxury Redefined",
    price: "₹1,05,999",
    badge: "Premium",
    features: [
      "Traditional & Candid Photography",
      "Drone Photography",
      "Traditional & Candid 4K Video",
      "Premium Luxury Album Box (12x36 & 16x24)",
      "Godox AD200/600 Professional Lighting",
      "5 Min Highlight Video",
      "6 Page Calendar & Photo Mug",
      "Traditional & Candid Frames",
    ],
  },
];

/* =========================
   COMPONENT
========================= */

export default function Packages({
  showPrice = false,
  category,
}) {

  /* =========================
     AUTO OPEN SECTION
  ========================= */

  const getDefaultSection = () => {

    if (category === "birthday") {
      return "birthday";
    }

    if (category === "engagement") {
      return "engagement";
    }

    return "wedding";
  };

  const [activeSection, setActiveSection] =
    useState(getDefaultSection());

  useEffect(() => {
    setActiveSection(getDefaultSection());
  }, [category]);

  const whatsappNumber = "917305357303";

  /* =========================
     WHATSAPP BOOKING
  ========================= */

  const handleBooking = (pkg) => {

    const priceText = showPrice
      ? ` (${pkg.price})`
      : "";

    const message = `Hello! I'm interested in the ${pkg.title} package${priceText}. Please share more details.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  /* =========================
     PACKAGE RENDER
  ========================= */

  const renderPackages = (packages) => (
    <div className="packages-container">

      {packages.map((item, index) => (

        <div
          className={`package-card ${
            item.badge ? "featured" : ""
          }`}
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

            {/* PRICE */}

            {showPrice ? (
              <div className="price-box">

                <h1>{item.price}</h1>

                <span className="event-text">
                  / event
                </span>

              </div>
            ) : (
              <div className="price-box">

                <p className="contact-for-price">
                  Contact for Best Price
                </p>

              </div>
            )}

            {/* FEATURES */}

            <div className="features">

              {item.features.map((feature, i) => (
                <p key={i}>
                  ✓ {feature}
                </p>
              ))}

            </div>

          </div>

          {/* BUTTON */}

          <button
            className="package-btn"
            onClick={() => handleBooking(item)}
          >
            {showPrice
              ? "Book Now ↗"
              : "Inquire Now ↗"}
          </button>

        </div>
      ))}

    </div>
  );

  /* =========================
     TOGGLE
  ========================= */

  const toggleSection = (section) => {

    setActiveSection(
      activeSection === section
        ? null
        : section
    );
  };

  /* =========================
     RETURN
  ========================= */

  return (
    <section
      className="packages"
      id="packages"
    >

      {/* HEADER */}

      <div className="packages-header">

        <p>PRICING</p>

        <h2>
          {showPrice
            ? "Our Professional Packages"
            : "Our Custom Collections"}
        </h2>

      </div>

      {/* ENGAGEMENT */}

      <div className="dropdown-section">

        <div
          className="dropdown-title"
          onClick={() =>
            toggleSection("engagement")
          }
        >

          <h3>
            Engagement Packages
          </h3>

          <span>
            {activeSection === "engagement"
              ? "−"
              : "+"}
          </span>

        </div>

        {activeSection === "engagement" &&
          renderPackages(
            engagementPackages
          )}

      </div>

      {/* WEDDING */}

      <div className="dropdown-section">

        <div
          className="dropdown-title"
          onClick={() =>
            toggleSection("wedding")
          }
        >

          <h3>
            Wedding Packages
          </h3>

          <span>
            {activeSection === "wedding"
              ? "−"
              : "+"}
          </span>

        </div>

        {activeSection === "wedding" &&
          renderPackages(
            weddingPackages
          )}

      </div>

      {/* BIRTHDAY */}

      <div className="dropdown-section">

        <div
          className="dropdown-title"
          onClick={() =>
            toggleSection("birthday")
          }
        >

          <h3>
            Birthday Packages
          </h3>

          <span>
            {activeSection === "birthday"
              ? "−"
              : "+"
            }
          </span>

        </div>

        {activeSection === "birthday" &&
          renderPackages(
            birthdayPackages
          )}

      </div>

    </section>
  );
}