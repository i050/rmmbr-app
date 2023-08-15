import React from "react";
import Card from "react-bootstrap/Card";
import "./index.css";
import { Link } from "react-router-dom";

const DonorCard = (props) => {
  return (
    <>
      <Link key={props.id} to={"/donordetails"} state={{ donor: props.donor }}>
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
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              style={{
                height: "6rem",
                width: "6rem",
                borderRadius: "100%",
                margin: "2rem",
              }}
              src={props.donor.image}
            />
            <Card.Body style={{ backgroundColor: "#f5f5f5" }}>
              <Card.Title style={{ backgroundColor: "#f5f5f5" }}>
                {props.name}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </>
  );
};

export default DonorCard;
