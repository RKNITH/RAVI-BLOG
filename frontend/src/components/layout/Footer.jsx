import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
            ? "light-footer"
            : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About LifeScribe</h3>
          <p>
            Welcome to LifeScribe, your go-to destination for thought-provoking articles, insightful stories, and inspiring content. Our blog covers a range of topics from lifestyle to technology, providing readers with fresh perspectives and valuable insights.
          </p>
          <p>
            <span>Email:</span> ravi@gmail.com
          </p>
          <p>
            <span>Phone:</span> 83177
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newsletter</h3>
            <p>Stay updated with our latest articles and special offers. Subscribe now to get our content delivered straight to your inbox.</p>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">Life<span>Scribe</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
