import React, { useState, useEffect } from "react";
import "./index.css";
import HighlightCard from "../HighlightCard";
import HighlightForm from "../HighlightForm";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";

const HighlightsBar = ({
  role,
  wallPermissions,
  memoryWallId,
  index,
  onAddHighlight,
}) => {
  const { memoryWalls } = useMemoryWallContext();
  const highlightsNews = memoryWalls[index].highlightsNews;
  const [isFormVisible, setIsFormVisible] = useState(false);

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
          index={index}
          memoryWallId={memoryWallId}
          onAddHighlight={onAddHighlight}
        />
      )}

      {highlightsNews
        .slice()
        .reverse()
        .map((item, index) => (
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
