import "./blog.css";

import img1 from "../../assets/hero1.jpg";
import img2 from "../../assets/hero2.jpg";
import img3 from "../../assets/hero3.jpg";

export default function Blog() {
  const blogs = [
    {
      img: img1,
      date: "Sep 20, 2025",
      category: "Wedding",
      title: "Newlyweds share first wedding photos",
    },
    {
      img: img2,
      date: "Sep 20, 2025",
      category: "Ceremony",
      title: "Newlyweds share first wedding photos",
    },
    {
      img: img3,
      date: "Sep 20, 2025",
      category: "Lifestyle",
      title: "Newlyweds share first wedding photos",
    },
  ];

  return (
    <section className="blog">
      <span className="tag">OUR BLOG</span>
      <h2>FROM THE JOURNAL</h2>

      <div className="blogGrid">
        {blogs.map((item, i) => (
          <div key={i} className="blog-card">
            <img src={item.img} alt="blog" />

            <div className="blog-content">
              <span className="meta">
                {item.category} • {item.date}
              </span>

              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}