import React from "react";

const AboutUs = ({ allVentures, goToPage, content }) => (
  <div
    style={{ height: "100vh", overflow: "hidden" }}
    className="about_us_section--wrap"
  >
    <header className="page__header">
      <h1 className="page_title">Portfolio</h1>
    </header>
    <h4>
      {allVentures.map((property, i) => (
        <span style={{ cursor: "pointer" }} onClick={e => goToPage(e, i)}>
          {property.title} {i === 0 || i === allVentures.length - 1 ? "" : "/"}{" "}
        </span>
      ))}
    </h4>
    <div className="text">
      <p>{content}</p>
    </div>
  </div>
);

export default AboutUs;
