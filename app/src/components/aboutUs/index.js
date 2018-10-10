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
        {modProperties.map((property, i) => (
          <span
            style={{ cursor: "pointer" }}
            onClick={e => goToPage(e, property.index)}
          >
            {property.title}
            {i === modProperties.length - 1 || i === modProperties.length - 1
              ? ""
              : " / "}
          </span>
        ))}
      </h4>
      <div className="text">
        <ReactMarkdown source={content} />
      </div>
    </div>
  );
};

export default AboutUs;
