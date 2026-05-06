import "./Testimonials.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import api from "../../services/api";

export default function Testimonials() {

  const containerRef =
    useRef(null);

  const [reviews, setReviews] =
    useState([]);

  /* ================= FETCH ================= */

  useEffect(() => {

    const fetchTestimonials =
      async () => {

        try {

          const res =
            await api.get(
              "/testimonial/all"
            );

          console.log(
            "Testimonials:",
            res.data
          );

          setReviews(
            Array.isArray(
              res.data
            )
              ? res.data
              : []
          );

        } catch (error) {

          console.log(
            "Failed to fetch testimonials",
            error
          );
        }
      };

    fetchTestimonials();

  }, []);

  /* ================= IMAGE URL ================= */

  const getImageUrl = (
    item
  ) => {

    // Full URL image
    if (
      item?.image &&
      item.image.startsWith(
        "http"
      )
    ) {
      return item.image;
    }

    // Local uploaded image
    if (
      item?.image
    ) {
      return `http://localhost:5000/uploads/${item.image}`;
    }

    // Alternative imageUrl field
    if (
      item?.imageUrl
    ) {
      return item.imageUrl;
    }

    return "";
  };

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {

    const container =
      containerRef.current;

    if (
      !container ||
      reviews.length === 0
    )
      return;

    let currentIndex = 0;

    const autoSlide = () => {

      const cards =
        container.querySelectorAll(
          ".journal-card"
        );

      if (!cards.length)
        return;

      const cardWidth =
        cards[0]
          .offsetWidth + 22;

      currentIndex++;

      if (
        currentIndex >=
        reviews.length
      ) {
        currentIndex = 0;
      }

      container.scrollTo({
        left:
          currentIndex *
          cardWidth,
        behavior: "smooth",
      });

    };

    const interval =
      setInterval(
        autoSlide,
        3500
      );

    return () =>
      clearInterval(
        interval
      );

  }, [reviews]);

  return (

    <section
      className="testimonials"
      id="testimonials"
    >

      {/* ================= HEADER ================= */}

      <div className="testimonial-header">

        <span className="tag">
          Wedding Stories & Experiences
        </span>

        <h2>
          WORDS FROM
          <span>
            {" "}
            OUR COUPLES{" "}
          </span>
        </h2>

        <p className="testimonial-subtext">

          Real emotions.
          Genuine moments.
          Beautiful memories
          shared by the couples
          who trusted us to
          capture their wedding
          story.

        </p>

      </div>

      {/* ================= CARDS ================= */}

      <div
        className="journal-container"
        ref={containerRef}
      >

        <div className="journal-scroll-wrapper">

          {reviews.map(
            (
              item,
              index
            ) => (

              <div
                className="journal-card"
                key={index}
              >

                {/* ================= IMAGE ================= */}

                <div className="journal-img-box">

                  <img
                    src={getImageUrl(
                      item
                    )}
                    alt={
                      item.clientName
                    }
                  />

                  <div className="floating-title-box">

                    <span className="venue-name">
                      VERIFIED CLIENT
                    </span>

                    <h3 className="card-title">
                      {
                        item.clientName
                      }
                    </h3>

                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="card-body">

                  <p className="card-text">
                    “{
                      item.review
                    }”
                  </p>

                  <div className="card-footer">

                    <span>
                      ★★★★★
                    </span>

                    <span className="review-type">
                      Verified Couple
                    </span>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}