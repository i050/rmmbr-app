import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./index.css";
import { Link } from "react-router-dom";

const DeceasedCard = ({ deceased }) => {
  return (
    <Link key={deceased.id} to="/donor-details" state={{ deceased: deceased }}>
      <div
        className="card-style"
        style={{
          width: "11rem",
          display: "inline-block",
          margin: "1rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card
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
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default DeceasedCard;
