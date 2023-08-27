import React from "react";
import "./index.css";
import HighlightCard from "../HighlightsCard";

const HighlightsBar = ({ highlightsNews }) => {
  // console.log(highlightsNews);
  return (
    <div className="highlights-bar">
      {highlightsNews.map((item, index) => (
        <HighlightCard
          key={item.id}
          img={item.img}
          date={item.date}
          text={item.text}
          title={item.title}
          eventKey={index}
        />
      ))}
    </div>
  );
};

export default HighlightsBar;
