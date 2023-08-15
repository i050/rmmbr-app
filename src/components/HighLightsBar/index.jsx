import React from "react";
import "./index.css";
import { News } from "../../assets/Data.js";

import HighlightsCard from "../../components/HighLightsCard";

function HighLightBar() {
  return (
    <>
      <div className="highlightBar">
        {News.map((item, index) => (
          <HighlightsCard
            key={item.id}
            title={item.title}
            date={item.date}
            text={item.text}
            img={item.img}
            eventKey={index.toString()}
            
          />
        ))}
      </div>
    </>
  );
}

export default HighLightBar;
