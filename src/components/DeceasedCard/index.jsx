import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./index.css";
import DeceasedForm from "../DeceasedForm";
import { Link } from "react-router-dom";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";

const DeceasedCard = ({
  deceased,
  role,
  wallPermissions,
  memoryWallId,
  deceasedId,
  deleteDeceasedCard,
  index,
  dIndex,
  updateList,
}) => {
  const [showForm, setShowForm] = useState(false);
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();
  const [cardData, setCardData] = useState(deceased);

  const handleEditClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    deleteDeceasedCard(deceasedId);
  };

  //updating card data
  const updateCard = (data) => {
    setCardData(data);
    setMemoryWalls(
      memoryWalls.map((memoryWall) => {
        if (memoryWall.id === memoryWallId) {
          return {
            ...memoryWall,
            deceasedsInfo: memoryWall.deceasedsInfo.map((deceased) => {
              if (deceased.id === deceasedId) {
                return {
                  ...deceased,
                  name: data.name,
                  imgPath: data.imgPath,
                  donationAmount: data.donationAmount,
                };
              }
              return deceased;
            }),
          };
        }
        return memoryWall;
      })
    );
  };

  return (
    <div className="deceased-card-style">
      {showForm ? (
        <DeceasedForm
        isNewCard={false}
          width={"11rem"}
          height={"15rem"}
          deceased={cardData} // when i will use it as a post i wont pass it
          memoryWallId={memoryWallId}
          onCancel={() => setShowForm(false)}
          index={index}
          dIndex={dIndex}
          updateCard={updateCard}
        />
      ) : (
        <Link
          to="/deceased-details"
          state={{ deceased: deceased }}
          className="link-no-underline"
        >
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
              src={cardData.imgPath}
            />
            <Card.Body style={{ backgroundColor: "#f5f5f5" }}>
              <Card.Title style={{ backgroundColor: "#f5f5f5" }}>
                {cardData.name}
              </Card.Title>
            </Card.Body>
            {role === "admin" ||
            (role === "partialAccess" &&
              wallPermissions.find((id) => id == memoryWallId)) ? (
              <div className="icons-container">
                <img
                  src="src\assets\images\bin 1.png"
                  alt="Delete"
                  className="delete-icon"
                  onClick={handleDeleteClick}
                />
                <img
                  src="src\assets\images\pen 1.png"
                  alt="Edit"
                  className="edit-icon icons"
                  onClick={handleEditClick}
                />
              </div>
            ) : null}
          </Card>
        </Link>
      )}
    </div>
  );
};

export default DeceasedCard;
