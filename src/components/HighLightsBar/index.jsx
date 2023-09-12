import React, { useState, useEffect } from "react";
import "./index.css";
import HighlightCard from "../HighlightCard";
import HighlightForm from "../HighlightForm";

const HighlightsBar = ({
  highlightsNews,
  role,
  wallPermissions,
  memoryWallId,
  onAddHighlight,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  console.log("bar highlightsNews", highlightsNews);
  // useEffect(() => {}, [highlightsNewsDB]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="highlights-bar">
      {role === "admin" ||
      (role === "partialAccess" &&
        wallPermissions.find((id) => id == memoryWallId)) ? (
        <div className="plus-btn-container">
          <button className="plus-btn" onClick={toggleFormVisibility}>
            <div className="plus-btn-text">הוספת עדכונים</div>
            <span className="plus-span">+</span>
          </button>
        </div>
      ) : null}

      {/* Conditionally render the form based on isFormVisible state */}
      {isFormVisible && (
        <HighlightForm
          highlightsNews={highlightsNews}
           memoryWallId={memoryWallId}
          // highLightUpdate={highLightUpdate}
          onAddHighlight={onAddHighlight}
        />
      )}

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