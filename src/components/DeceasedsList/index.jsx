import React, { useState, useEffect } from "react";
import DeceasedCard from "../DeceasedCard";
import Header from "../Header";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
import { deleteDataFromDatabase } from "../../services/apiFetcher";
import AddDeceasedCard from "../AddDeceasedCard";
import "./index.css";

const DeceasedsList = React.memo(
  ({
    role,
    wallPermissions,
    memoryWallId,
    index,
    addNewDeceasedToMemoryWall,
  }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const { memoryWalls, setMemoryWalls } = useMemoryWallContext();

  
    const ratingTypes = memoryWalls[index].ratingTypes;

    const deleteDeceasedCard = async (deceasedId) => {
      const endpoint = `http://localhost:3000/api/getMemoryWallById/${memoryWallId}/deceasedsInfo/${deceasedId}/`;
      try {
        const newDeceasedList = await deleteDataFromDatabase(endpoint);
      
        //memoryWalls[memoryWallId].deceasedsInfo = newDeceasedList;
        //setMemoryWalls(memoryWalls);
        setMemoryWalls((prevState) => {
          const newState = [...prevState];
          newState[index].deceasedsInfo = newDeceasedList;

          return newState;
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    const updateList = (data) => {
      setMemoryWalls(() => {
        const newState = [...data];
        return newState;
      });
      setDeceasedsInfo(data[memoryWallId].deceasedsInfo);
    };

    const deceasedsFirstPlace = memoryWalls[index].deceasedsInfo.filter(
      (d) => d.donationAmount >= ratingTypes.firstPlace.minAmount
    );
    const deceasedsSecondPlace = memoryWalls[index].deceasedsInfo.filter(
      (d) =>
        d.donationAmount >= ratingTypes.secondPlace.minAmount &&
        d.donationAmount < ratingTypes.firstPlace.minAmount
    );
    const deceasedsThirdPlace = memoryWalls[index].deceasedsInfo.filter(
      (d) =>
        d.donationAmount >= ratingTypes.thirdPlace.minAmount &&
        d.donationAmount < ratingTypes.secondPlace.minAmount
    );
    console.log(memoryWalls);

    return (
      <div>
        <div className="deceaseds-btn-container">
          {role === "admin" ||
          (role === "partialAccess" &&
            wallPermissions.find((id) => id == memoryWallId)) ? (
            <button className="deceaseds-plus-btn" onClick={handleOpenModal}>
              <div className="deceaseds-plus-btn-text">הוספת נפטר</div>
              <span className="deceaseds-plus-span">+</span>
            </button>
          ) : null}
        </div>
        {showModal && (
          <AddDeceasedCard
            onCancel={() => setShowModal(false)}
            memoryWallId={memoryWallId}
            handleClose={handleCloseModal}
            addNewDeceasedToMemoryWall={addNewDeceasedToMemoryWall}
          />
        )}
        <div>
          {deceasedsFirstPlace.length != 0 ? (
            <Header
              title={ratingTypes.firstPlace.title}
              size={"50px"}
              margin={"0 39% 0 0 "}
            />
          ) : null}
          {deceasedsFirstPlace.map((deceased, dIndex) => (
            <DeceasedCard
              deceased={deceased}
              key={deceased.id}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWallId}
              deceasedId={deceased.id}
              deleteDeceasedCard={deleteDeceasedCard}
              index={index}
              dIndex={dIndex}
              updateList={updateList}
            />
          ))}
        </div>
        <div>
          {deceasedsSecondPlace.length != 0 ? (
            <Header
              title={ratingTypes.secondPlace.title}
              size={"50px"}
              margin={"0 39% 0 0 "}
            />
          ) : null}
          {deceasedsSecondPlace.map((deceased, dIndex) => (
            <DeceasedCard
              deceased={deceased}
              key={deceased.id}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWallId}
              deceasedId={deceased.id}
              deleteDeceasedCard={deleteDeceasedCard}
              index={index}
              dIndex={dIndex}
              updateList={updateList}
            />
          ))}
        </div>
        <div>
          {deceasedsThirdPlace.length != 0 ? (
            <Header
              title={ratingTypes.thirdPlace.title}
              size={"50px"}
              margin={"0 39% 0 0 "}
            />
          ) : null}
        </div>
        {deceasedsThirdPlace.map((deceased, dIndex) => (
          <DeceasedCard
            deceased={deceased}
            key={deceased.id}
            role={role}
            wallPermissions={wallPermissions}
            memoryWallId={memoryWallId}
            deceasedId={deceased.id}
            deleteDeceasedCard={deleteDeceasedCard}
            index={index}
            dIndex={dIndex}
            updateList={updateList}
          />
        ))}
      </div>
    );
  }
);

export default DeceasedsList;
