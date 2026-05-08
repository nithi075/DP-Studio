import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Featured from "./components/featured/featured";
import About from "./components/About/About";
import Packages from "./components/packages/Packages";
import Testimonials from "./components/testimonials/Testimonials";
import Instagram from "./components/instagram/Instagram";

import Footer from "./components/footer/footer";
import Location from "./components/location/Location";
import FloatingChat from "./components/floating/floating";

// Pages
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/gallerypage/gallerypage";
import GalleryUpload from "./pages/Admin/GalleryUpload";
import FeaturedUpload from "./pages/Admin/FeaturedUpload";
import TestimonialUpload from "./pages/Admin/TestimonialUpload";
import InstagramUpload from "./pages/Admin/InstagramUpload";
import Dashboard from "./pages/Admin/Dashboard";

function HomePage() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<> <section id="home"> <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> <Hero /> </section>


  {/* <section id="services">
    <Services />
  </section> */}

  <section id="gallery">
    <Gallery />
  </section>

  <section id="featured">
    <Featured />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="packages">
    <Packages />
  </section>

  <section id="testimonials">
    <Testimonials />
  </section>

  <section id="instagram">
    <Instagram />
  </section>

  {/* <section id="blog">
    <Blog />
  </section> */}

  <section id="location">
    <Location />
  </section>

  <section id="contact">
    <Footer />
  </section>

  <FloatingChat />
</>


);
}

function App() {
return ( <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/galleryDetails/:category" element={<GalleryDetails />} />
<Route path="/admin" element={<Dashboard />} />
<Route path="/gallery-upload" element={<GalleryUpload />} />
<Route path="/featured-upload" element={<FeaturedUpload />} />
<Route path="/instagram-upload" element={<InstagramUpload />} />
<Route path="/testimonial-upload" element={<TestimonialUpload />} /> </Routes>
);
}

export default App;