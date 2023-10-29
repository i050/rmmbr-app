import React from "react";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
import { useLocation } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./index.css";

const EditUpdatesSlider = ({ updateIndex }) => {
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();
  const location = useLocation();

  const index = location.state?.index;
  const memoryWall = memoryWalls[index];
  const update = memoryWall.sliderUpdates[updateIndex];
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",

              backgroundColor: "transparent",
            }}
            className="item-style"
          >
            <img
              className="update-image"
              alt="update-image"
              src={update.imagePath}
            ></img>

            <h5>{update.text}</h5>
            <div>
              <span>
                <p></p>
              </span>
              {/* delete */}
              <span
                onClick={() => {
                  alert(" edit");
                }}
              >
                <img src="src\assets\images\pen 1.png"></img>
              </span>
              <span
                onClick={() => {
                  alert(" delete");
                }}
              >
                <img src="src\assets\images\bin 1.png"></img>
              </span>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default EditUpdatesSlider;
