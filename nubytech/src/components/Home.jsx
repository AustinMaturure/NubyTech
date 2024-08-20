import { useState } from "react";
import "../css/home.css";
import wimg1 from "../assets/woman1.webp";
import wimg2 from "../assets/woman2.webp";
import wimg3 from "../assets/woman3.webp";
import wimg4 from "../assets/woman4.webp";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Empower, Inovate, Transform.</h1>
          <p>
            Nubytech stands at the intersection of empowering aspiring female
            tech leaders and fostering entrepreneurial innovations. Our mission
            is to bridge the gap between coding bootcamp education and
            real-world job readiness, empowering female bootcamp graduates with
            opportunities to work on impactful, real-world projects and
            developing proof-of-concept tech solutions for entrepreneurs.
          </p>
        </div>
        <div className="hero-images">
          <div>
            <img src={wimg3} alt="woman-smiling" srcset="" />
          </div>
          <div>
            <img src={wimg2} alt="woman-smiling" srcset="" />
          </div>
          <div>
            <img src={wimg1} alt="woman-smiling" srcset="" />
          </div>
          <div>
            <img src={wimg4} alt="woman-smiling" srcset="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
