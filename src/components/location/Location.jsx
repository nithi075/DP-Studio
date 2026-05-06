import "./Location.css";

export default function Location() {

  return (

    <section className="location" id="location">

      {/* ================= HEADER ================= */}

      <div className="location-header">

        <span className="location-tag">
          VISIT OUR STUDIO
        </span>

        <h2>
          OUR
          <span> LOCATION </span>
        </h2>

        <p className="location-text">

          DP Photography Studio <br />

          Professional Wedding &
          Portrait Photography Studio <br />

          Tamil Nadu, India

        </p>

      </div>

      {/* ================= MAP ================= */}

      <div className="map-wrapper">

        <div className="map-container">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0635299430146!2d77.30659519999999!3d8.9662937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429642cbf30d9%3A0xc1830a54362719ce!2sDP%20Photography!5e0!3m2!1sen!2sin!4v1778084354102!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DP Photography Location"
          ></iframe>

        </div>

        {/* ================= FLOAT CARD ================= */}

        <div className="location-card">

          <span className="mini-tag">
            STUDIO ADDRESS
          </span>

          <h3>
            DP Photography
          </h3>

          <p>

            Professional Wedding,
            Portrait & Event Photography Studio.

          </p>

          <a
            href="https://maps.google.com/?q=DP Photography"
            target="_blank"
            rel="noreferrer"
          >
            OPEN IN GOOGLE MAPS
          </a>

        </div>

      </div>

    </section>
  );
}