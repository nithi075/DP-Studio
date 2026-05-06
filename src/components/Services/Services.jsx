import "./Services.css";

const SERVICE_DATA = [
  { id: "01", title: "Brand", desc: "Elegant identity & commercial photography" },
  { id: "02", title: "Wedding", desc: "Luxury wedding coverage & storytelling" },
  { id: "03", title: "Editorial", desc: "High-end magazine style portrait shoots" },
];

export default function Services() {
  return (
    <section className="services">

      <div className="services-header">
        <span className="tag">OUR SERVICES</span>
        <h2>WHAT WE DO</h2>
      </div>

      <div className="marquee">
        <div className="marquee-track">

          {[...SERVICE_DATA, ...SERVICE_DATA].map((service, index) => (
            <div key={index} className="service-card">

              <div className="service-header">
                <span className="service-number">{service.id}</span>
                <span className="service-star">✦</span>
              </div>

              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>

              <div className="animated-line"></div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}