import React from "react";
import "./Section.scss";
const Section = () => {
  return (
    <div>
      <main>
        <section className="section">
          <p>Spring / Summer Collection 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button>SHOP NOW</button>
        </section>
        <section className="section2">
          <div className="card card1">
            <p>WOMEN'S</p>
          </div>
          <div className="card card2"><p>accessories's</p></div>
          <div className="card card3"><p>MEN's</p></div>
        </section>
      </main>
    </div>
  );
};

export default Section;
