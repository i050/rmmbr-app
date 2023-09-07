import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./index.css";
import { Link } from "react-router-dom";

const DeceasedCard = ({ deceased, role,wallPermissions,memoryWallId }) => {
  return (
    <Link
      key={deceased.id}
      to="/deceased-details"
      state={{ deceased: deceased }}
    >
      <div
        className="card-style"
        style={{
          width: "11rem",
          height: "15rem",
          display: "inline-block",
          margin: "1rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Card.Img
            variant="top"
            style={{
              height: "6rem",
              width: "6rem",
              borderRadius: "100%",
              margin: "2rem",
              // objectFit: "contain",
              objectFit: "cover",
              // objectFit: "fill",
            }}
            src={deceased.imgPath}
          />
          <Card.Body style={{ backgroundColor: "#f5f5f5" }}>
            <Card.Title style={{ backgroundColor: "#f5f5f5" }}>
              {deceased.name}
            </Card.Title>
          </Card.Body>
        </Card> */}

        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            position: "relative",
            height: "15rem",
          }}
        >
          <Card.Img
            variant="top"
            style={{
              height: "6rem",
              width: "6rem",
              borderRadius: "100%",
              margin: "2rem",
              objectFit: "cover",
            }}
            src={deceased.imgPath}
          />
          <Card.Body style={{ backgroundColor: "#f5f5f5" }}>
            <Card.Title style={{ backgroundColor: "#f5f5f5" }}>
              {deceased.name}
            </Card.Title>
          </Card.Body>
          {role === "admin" ||(role === "partialAccess"&&wallPermissions.find((id) => id== memoryWallId)) ? (
            <div className="icons-container">
              <img
                src="src\assets\images\bin 1.png"
                alt="Delete"
                className="delete-icon"
                // style={{
                //   width: "15px",
                //   height: "15px",
                //   position: "absolute",
                //   bottom: "10px",
                //   left: "10px",
                //   cursor: "pointer",
                // }}
                onClick={() => {}}
              />
              <img
                src="src\assets\images\pen 1.png"
                alt="Edit"
                className="edit-icon icons"
                // style={{
                //   width: "15px",
                //   height: "15px",
                //   position: "absolute",
                //   bottom: "10px",
                //   left: "40px",
                //   cursor: "pointer",
                // }}
                onClick={() => {}}
              />
            </div>
          ) : null}
          {/* Bin Icon */}
        </Card>
      </div>
    </Link>
  );
};

export default DeceasedCard;