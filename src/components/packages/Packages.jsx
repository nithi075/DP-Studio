import "./Packages.css";

const packagesData = [
  {
    title: "Silver",
    subtitle: "Basic Wedding Coverage",
    price: "₹39,999",
    features: [
      "Traditional Photography – 1",
      "Traditional Video – 1",
      "Premium Album (12x36)",
      "400 Photos",
      "Calendar (6 Pages)",
      "Coffee Mug",
      "Pendrive Output"
    ]
  },
  {
    title: "Gold",
    subtitle: "Most Popular Package",
    price: "₹49,999",
    badge: "Most Popular",
    features: [
      "Traditional Photography – 1",
      "4K Wedding Video",
      "Premium Album Box",
      "500 Photos",
      "Frame ×2",
      "Calendar (6 Pages)",
      "Coffee Mug",
      "Pendrive Output"
    ]
  },
  {
    title: "Platinum",
    subtitle: "Premium Wedding Experience",
    price: "₹64,999",
    badge: "Best Value",
    features: [
      "Traditional + Candid Photography",
      "Traditional + Candid Video",
      "4K Cinematic Video",
      "Luxury Album Box",
      "450+ Photos",
      "Frame ×2",
      "Calendar",
      "Coffee Mug",
      "Pendrive Output"
    ]
  }
];

export default function Packages() {
  const whatsappNumber = "917305357303"; // Replace with your actual WhatsApp number

  const handleBooking = (pkg) => {
    const message = `Hello! I'm interested in the ${pkg.title} package (${pkg.price}). Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="packages" id="packages">

      <div className="packages-header">
        <p>PRICING</p>
        <h2>OUR PACKAGES</h2>
      </div>

      <div className="packages-container">
        {packagesData.map((item, index) => (
          <div
            className={`package-card ${item.badge ? "featured" : ""}`}
            key={index}
          >

            {item.badge && <div className="badge">{item.badge}</div>}

            <h3>{item.title}</h3>
            <p className="subtitle">{item.subtitle}</p>

            <div className="price-box">
              <h1>{item.price}</h1>
              <span className="event-text">/ event</span>
            </div>

            <div className="features">
              {item.features.map((feature, i) => (
                <p key={i}>• {feature}</p>
              ))}
            </div>

            <button
              className="package-btn"
              onClick={() => handleBooking(item)}
            >
              Book now ↗
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}