import React from "react";
import ReactMarkdown from "react-markdown";
import { modifiedPropertyTitles } from "../../utils";

const AboutUs = ({ allVentures, goToPage, content }) => {
  const modProperties = modifiedPropertyTitles(allVentures);

  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      className="about_us_section--wrap"
    >
      <header className="page__header">
        <h1 className="page_title">Portfolio</h1>
      </header>
      <h4>
        {modProperties
          .filter(property => property.title !== undefined)
          .map((property, i) => {
            if (property.title === "Highpoint Ventures") {
              return (
                <span
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={e => goToPage(e, property.index)}
                >
                  {property.title}
                </span>
              );
            } else {
              return (
                <span
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={e => goToPage(e, property.index)}
                >
                  {property.title} /
                </span>
              );
            }
          })}
      </h4>
      <div className="text">
        <ReactMarkdown source={content} />
      </div>
    </div>
  );
};

export default AboutUs;
