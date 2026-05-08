import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Calendar,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { NavHashLink } from "react-router-hash-link";

import logoimg from "../../assets/logo.png";

import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [mobileExpanded, setMobileExpanded] =
    useState(null);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  const navbarRef = useRef(null);

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  /* ================= CLOSE MOBILE ================= */

  useEffect(() => {

    setMenuOpen(false);
    setMobileExpanded(null);

  }, [location]);

  /* ================= BODY LOCK ================= */

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [menuOpen]);

  /* ================= NAV ITEMS ================= */

  const navItems = [

    {
      title: "Home",
      link: "/",
    },

    {
      title: "Weddings",
      link: "/gallery",

      submenu: [
        {
          title: "Traditional Wedding",
          link:
            "/galleryDetails/traditional-wedding",
        },

        {
          title: "Destination Wedding",
          link:
            "/galleryDetails/destination-wedding",
        },

        {
          title: "Reception",
          link:
            "/galleryDetails/reception",
        },

        {
          title: "Bridal Photography",
          link:
            "/galleryDetails/bridal-photography",
        },
      ],
    },

    {
      title: "Pre Wedding",
      link: "/gallery",

      submenu: [
        {
          title: "Pre Wedding",
          link:
            "/galleryDetails/pre-wedding",
        },
      ],
    },

    {
      title: "Maternity & Baby",
      link: "/gallery",

      submenu: [
        {
          title: "Maternity Photography",
          link:
            "/galleryDetails/maternity",
        },

        {
          title: "Baby Photography",
          link:
            "/galleryDetails/baby-shoots",
        },
      ],
    },

    {
      title: "Portraits",
      link: "/gallery",

      submenu: [
        {
          title: "Portrait Photography",
          link:
            "/galleryDetails/bridal",
        },
      ],
    },

    {
      title: "Events",
      link: "/gallery",

      submenu: [
        {
          title: "Event Photography",
          link:
            "/galleryDetails/birthday",
        },
      ],
    },

    {
      title: "Packages",
      link: "/#packages",
    },

    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  return (

    <nav
      ref={navbarRef}
      className={`navbar-wrapper ${
        scrolled ? "scrolled" : ""
      }`}
    >

      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <Link to="/" className="logo">

          <img
            src={logoimg}
            alt="Studio Logo"
          />

          <div className="logo-text">

            <h2>
              DP PHOTOGRAPHY
            </h2>

            <p>
              WEDDING STORIES
            </p>

          </div>

        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <ul className="desktop-nav">

          {navItems.map((item, index) => (

            <li
              key={index}
              className={
                item.submenu
                  ? "has-submenu"
                  : ""
              }
            >

              {item.link.includes("#") ? (

                <NavHashLink
                  smooth
                  to={item.link}
                >

                  {item.title}

                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="chevron"
                    />
                  )}

                </NavHashLink>

              ) : (

                <Link
                  to={item.link}
                  className={
                    location.pathname ===
                    item.link
                      ? "active"
                      : ""
                  }
                >

                  {item.title}

                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="chevron"
                    />
                  )}

                </Link>
              )}

              {/* ================= DROPDOWN ================= */}

              {item.submenu && (

                <div className="mega-dropdown">

                  <ul className="dropdown-content">

                    {item.submenu.map(
                      (sub, i) => (

                        <li key={i}>

                          <Link to={sub.link}>
                            {sub.title}
                          </Link>

                        </li>
                      )
                    )}

                  </ul>

                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ================= ACTIONS ================= */}

        <div className="nav-actions">

          <a
            href="tel:9840767566"
            className="action-btn call-btn"
          >

            <Phone size={16} />

            <span>
              9840767566
            </span>

          </a>

          <NavHashLink
            smooth
            to="/#contact"
            className="action-btn book-btn"
          >

            <Calendar size={16} />

            <span>
              BOOK NOW
            </span>

          </NavHashLink>

          {/* ================= MOBILE TOGGLE ================= */}

          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}

      <div
        className={`mobile-sidebar-overlay ${
          menuOpen ? "show" : ""
        }`}
        onClick={() =>
          setMenuOpen(false)
        }
      />

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`mobile-sidebar ${
          menuOpen ? "open" : ""
        }`}
      >

        {/* ================= MOBILE HEADER ================= */}

        <div className="mobile-header">

          <img
            src={logoimg}
            alt="Logo"
            className="mobile-logo"
          />

          <button
            className="mobile-close-btn"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <X size={28} />

          </button>

        </div>

        {/* ================= MOBILE NAV ================= */}

        <div className="mobile-nav-content">

          {navItems.map((item, index) => (

            <div
              key={index}
              className="mobile-item-group"
            >

              <div className="mobile-link-row">

                {item.link.includes("#") ? (

                  <NavHashLink
                    smooth
                    to={item.link}
                    onClick={() =>
                      !item.submenu &&
                      setMenuOpen(false)
                    }
                  >

                    {item.title}

                  </NavHashLink>

                ) : (

                  <Link
                    to={item.link}
                    onClick={() =>
                      !item.submenu &&
                      setMenuOpen(false)
                    }
                  >

                    {item.title}

                  </Link>
                )}

                {item.submenu && (

                  <button
                    className="expand-btn"
                    onClick={() =>

                      setMobileExpanded(
                        mobileExpanded ===
                          index
                          ? null
                          : index
                      )
                    }
                  >

                    <ChevronDown
                      size={20}
                      className={
                        mobileExpanded ===
                        index
                          ? "rotate"
                          : ""
                      }
                    />

                  </button>
                )}
              </div>

              {item.submenu &&
                mobileExpanded ===
                  index && (

                <div className="mobile-sub-list">

                  {item.submenu.map(
                    (sub, i) => (

                      <Link
                        key={i}
                        to={sub.link}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                      >

                        {sub.title}

                      </Link>
                    )
                  )}

                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}