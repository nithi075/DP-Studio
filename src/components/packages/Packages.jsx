
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
    services: [
      "Traditional Photography",
    ],
    delivery: [
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
    services: [
      "Traditional Photography",
      "Traditional Videography",
    ],
    delivery: [
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
    services: [
      "Traditional Photo (350 Photos)",
    ],
    delivery: [
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
    services: [
      "Traditional Photo",
      "Traditional Video",
    ],
    delivery: [
      "Album (12×36 - 350 Photos)",
      "1 Photo Frame",
      "1 Calendar",
      "Pendrive Delivery",
    ],
  },
  {
    title: "Ceremony Grand",
    subtitle: "Package - 03",
    price: "₹50,000",
    services: [
      "Traditional Photography",
      "Candid Photography",
      "Traditional Video",
    ],
    delivery: [
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
    services: [
      "Traditional Photography",
      "500 Edited Photos",
    ],
    delivery: [
      "Premium Album (12×36)",
      "Traditional Frame",
      "6 Page Calendar",
      "Customized Photo Mug",
    ],
  },
  {
    title: "Premium Wedding",
    subtitle: "Photo + Video Coverage",
    price: "₹39,999",
    services: [
      "Traditional Photography",
      "Traditional Videography",
      "500 Edited Photos",
    ],
    delivery: [
      "Pendrive Video Output",
      "Premium Album (12×36)",
      "Traditional Frame",
      "6 Page Calendar",
    ],
  },
  {
    title: "Royal Wedding",
    subtitle: "Complete Premium Package",
    price: "₹54,999",
    services: [
      "Traditional Photography",
      "Candid Photography",
      "Traditional Full HD Video",
    ],
    delivery: [
      "Luxury Album Box",
      "Luxury Album Box (24×16)",
      "Traditional Album",
      "Candid Album",
      "Traditional Frame",
      "Candid Frame",
      "Calendar + Mug",
      "Pendrive Delivery",
    ],
  },
  {
    title: "DP Premium Wedding",
    subtitle: "Traditional Photography + Candid Photography Full Coverage",
    price: "₹69,999",
    badge: "Trending",
    services: [
      "Traditional Photography",
      "Candid Photography",
      "Traditional Video",
      "Traditional Full HD Video",
      "Traditional Video 4K Full",
    ],
    delivery: [
      "Pendrive Video Output",
      "Traditional Album (12×36)",
      "Candid Album (12×24)",
      "Traditional Frame",
      "Candid Frame",
      "6 Page Calendar",
      "Coffee Mug",
      "Pendrive Delivery",
    ],
  },
  {
    title: "Elite Wedding Story",
    subtitle: "The Ultimate Experience",
    price: "₹84,999",
    badge: "Premium",
    services: [
      "Traditional Photography",
      "Candid Photography",
      "Traditional 4K Video",
      "Candid 4K Video",
      "5 Min Highlight Video",
    ],
    delivery: [
      "Pendrive Video Output",
      "Traditional Album (12×36)",
      "Candid Album (12×24)",
      "Candid Album",
      "Traditional Frame",
      "Candid Frame",
      "6 Page Calendar",
      "Coffee Mug",
      "Pendrive Delivery",
    ],
  },
  {
    title: "The Grand DP Signature",
    subtitle: "Luxury Redefined",
    price: "₹1,05,999",
    badge: "Premium",
    services: [
      "Traditional Photography",
      "Candid Photography",
      "Drone Photography",
      "Traditional 4K Video",
      "Candid 4K Video",
      "5 Min Highlight Video",
    ],
    delivery: [
      "Pendrive Video Output",
      "Traditional Album (12×36)",
      "Candid Album (12×24)",
      "Traditional Frame",
      "Candid Frame",
      "6 Page Calendar",
      "Coffee Mug",
      "Pendrive Delivery",
    ],
  },
];

/* =========================
   PUBERTY PACKAGES
   Wedding services added to
   corresponding package levels
========================= */

const pubertyPackages = [
  {
    title: "Puberty Package 01",
    subtitle: "Package - 01",
    price: "₹20,000",
    services: [
      ...weddingPackages[0].services,
    ],
    delivery: [
      ...engagementPackages[0].delivery,
    ],
  },
  {
    title: "Puberty Package 02",
    subtitle: "Package - 02",
    price: "₹35,000",
    services: [
      ...weddingPackages[1].services,
    ],
    delivery: [
      ...engagementPackages[1].delivery,
    ],
  },
  {
    title: "Puberty Package 03",
    subtitle: "Package - 03",
    price: "₹50,000",
    services: [
      ...weddingPackages[2].services,
    ],
    delivery: [
      ...engagementPackages[2].delivery,
    ],
  },
  {
    title: "Puberty Package 04",
    subtitle: "Package - 04",
    price: "₹60,000",
    services: [
      ...weddingPackages[3].services,
    ],
    delivery: [
      ...engagementPackages[0].delivery,
    ],
  },
  {
    title: "Puberty Package 05",
    subtitle: "Package - 05",
    price: "₹75,000",
    services: [
      ...weddingPackages[4].services,
    ],
    delivery: [
      ...engagementPackages[1].delivery,
      "Candid Album (24×16 - 450 Photos)",
      "Traditional Album (12×36 - 400 Photos)",
      "Candid Frame",
      "Traditional Frame",
    ],
  },
  {
    title: "Puberty Package 06",
    subtitle: "Package - 06",
    price: "₹95,000",
    services: [
      ...weddingPackages[5].services,
    ],
    delivery: [
      ...engagementPackages[2].delivery,
    ],
  },
];

/* =========================
   PACKAGES COMPONENT
========================= */

export default function Packages({
  showPrice = false,
  category,
}) {
  const getDefaultSection = () => {
    if (category === "birthday") return "birthday";
    if (category === "engagement") return "engagement";
    if (category === "puberty") return "puberty";
    return "wedding";
  };

  const [activeSection, setActiveSection] =
    useState(getDefaultSection);

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

    const message =
      `Hello! I'm interested in the ${pkg.title} package` +
      `${priceText}. Please share more details.`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  /* =========================
     PACKAGE CARD
  ========================= */

  const renderPackages = (packages) => (
    <div className="packages-container">
      {packages.map((item) => (
        <div
          className={`package-card ${
            item.badge ? "featured" : ""
          }`}
          key={item.title}
        >
          {item.badge && (
            <div className="badge">{item.badge}</div>
          )}

          <div className="package-content">
            <h3>{item.title}</h3>

            <p className="subtitle">
              {item.subtitle}
            </p>

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

            {/* SERVICES */}

            <div className="features package-feature-group">
              <h4 className="feature-heading">
                Services
              </h4>

              {item.services.map((service, index) => (
                <p key={`service-${index}`}>
                  {service}
                </p>
              ))}
            </div>

            {/* DELIVERY */}

            <div className="features package-feature-group">
              <h4 className="feature-heading">
                Delivery
              </h4>

              {item.delivery.map((delivery, index) => (
                <p key={`delivery-${index}`}>
                  {delivery}
                </p>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="package-btn"
            onClick={() => handleBooking(item)}
          >
            {showPrice ? "Book Now ↗" : "Inquire Now ↗"}
          </button>
        </div>
      ))}
    </div>
  );

  /* =========================
     DROPDOWN
  ========================= */

  const toggleSection = (section) => {
    setActiveSection((current) =>
      current === section ? null : section
    );
  };

  const renderSection = (section, title, packages) => (
    <div className="dropdown-section" key={section}>
      <div
        className="dropdown-title"
        onClick={() => toggleSection(section)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleSection(section);
          }
        }}
        aria-expanded={activeSection === section}
      >
        <h3>{title}</h3>

        <span>
          {activeSection === section ? "−" : "+"}
        </span>
      </div>

      {activeSection === section && renderPackages(packages)}
    </div>
  );

  /* =========================
     RETURN
  ========================= */

  return (
    <section className="packages" id="packages">
      <div className="packages-header">
        <p>PRICING</p>

        <h2>
          {showPrice
            ? "Our Professional Packages"
            : "Our Custom Collections"}
        </h2>
      </div>

      {renderSection(
        "engagement",
        "Engagement Packages",
        engagementPackages
      )}

      {renderSection(
        "puberty",
        "Puberty Packages",
        pubertyPackages
      )}

      {renderSection(
        "wedding",
        "Wedding Packages",
        weddingPackages
      )}

      {renderSection(
        "birthday",
        "Birthday Packages",
        birthdayPackages
      )}
    </section>
  );
}
