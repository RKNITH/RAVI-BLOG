import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to **LifeScribe**, where every word tells a story and every article is crafted to inspire, inform, and engage. Our platform is dedicated to delivering high-quality content across a variety of topics, catering to curious minds and passionate readers.
        </p>
        <p>
          From lifestyle tips and personal growth insights to technology updates and travel tales, we cover a diverse range of subjects. Our mission is to provide readers with content that not only educates but also empowers them to explore new perspectives and ideas.
        </p>
        <p>
          We believe in the power of storytelling and the impact of sharing knowledge. Each article on LifeScribe is thoughtfully written, ensuring that our audience gets the best of information, inspiration, and entertainment. Whether you’re looking for practical advice, in-depth analysis, or just something to spark your creativity, we’ve got you covered.
        </p>
        <p>
          Our team of passionate writers and editors are constantly exploring new trends, uncovering hidden gems, and bringing fresh content to our readers. LifeScribe is more than just a blog; it’s a space where ideas come to life and conversations begin.
        </p>
        <p>
          Join us on this journey of discovery, and let’s scribe the story of life together. Stay tuned for regular updates, subscribe to our newsletter, and never miss out on the latest from LifeScribe. Thank you for being a part of our growing community!
        </p>
      </div>
    </article>
  );
};

export default About;
