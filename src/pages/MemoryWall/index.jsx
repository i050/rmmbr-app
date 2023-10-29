import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import DeceasedsList from "../../components/DeceasedsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HighlightsBar from "../../components/HighlightsBar";
import Container from "react-bootstrap/Container";
import VisualUpdatesSlider from "../../components/VisualUpdatesSlider";
import About from "../../components/About";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
import { useLocation } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import "./index.css";
import ThreeDotsAdminDropdown from "../../components/ThreeDotsAdminDropdown";
import UpdateHeaderForm from "../../components/UpdateHederForm";
import UpdateAboutForm from "../../components/UpdateAboutForm";
import { deleteDataFromDatabase } from "../../services/apiFetcher";
import ListEditUpdateSlider from "../../components/ListEditUpdateSlider";
// import { deleteDataFromDatabase } from "../../services/apiFetcher";

const MemoryWall = () => {
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();
  const [refresh, setRefresh] = useState(false);

  const location = useLocation();

  const index = location.state?.index;
  const memoryWall = memoryWalls[index];

  const [role, setRole] = useState("noRole");
  const [wallPermissions, setWallPermissions] = useState("noPermissions");
  const [highlightsNews, setHighlightsNews] = useState(
    memoryWall.highlightsNews
  );

  const [deceasedsInfo, setDeceasedsInfo] = useState(memoryWall.deceasedsInfo);

  const [isOpenTitleInput, setIsOpenTitleInput] = useState(false);
  const [isOpenAboutInput, setIsOpenAboutInput] = useState(false);

  const addHighlightToMemoryWall = (newHighlight) => {
    const updateHighlight = [...highlightsNews, newHighlight];
    setHighlightsNews(updateHighlight);

    memoryWalls[index].highlightsNews = updateHighlight;
    setMemoryWalls(memoryWalls); //because there is no backend
  };

  const addNewDeceasedToMemoryWall = (newDeceased) => {
    console.log(newDeceased.newDeceased);
    const updateDeceased = [...deceasedsInfo, newDeceased.newDeceased];
    setDeceasedsInfo(updateDeceased);

    memoryWalls[index].deceasedsInfo = updateDeceased
    setMemoryWalls(memoryWalls); //because there is no backend
    console.log(memoryWalls);  

  };

  useEffect(() => {
    
    if (isAuthenticated()) {
      setRole(authUser().role);
      setWallPermissions(authUser().permissions.memoryWalls);
    } else {
      setRole("noRole");
    }
  });

  const updateTitleInput = (bool) => {
    setIsOpenTitleInput(bool);
  };

  const closeTitleInput = () => {
    setIsOpenTitleInput(false);
  };

  const updateAboutInput = (bool) => {
    setIsOpenAboutInput(bool);
  };

  const closeAboutInput = () => {
    setIsOpenAboutInput(false);
  };

  const deleteAboutText = async () => {
    const endpoint = `http://localhost:3000/api/getMemoryWallById/${memoryWall.id}/about`;
    try {
      await deleteDataFromDatabase(endpoint);
      memoryWalls[index].about = "";
      setMemoryWalls(memoryWalls);
      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} lg={8} xl={9}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10%",
              }}
            >
              {role === "admin" ||
              (role === "partialAccess" &&
                wallPermissions.find((id) => id == memoryWall.id)) ? (
                <span>
                  <ThreeDotsAdminDropdown
                    updateTitleInput={updateTitleInput}
                    updateAboutInput={updateAboutInput} //about
                    returnToDotsIcon={isOpenTitleInput}
                  />
                </span>
              ) : null}
              {isOpenTitleInput ? (
                <UpdateHeaderForm
                  closeTitleInput={closeTitleInput}
                  memoryWallId={memoryWall.id}
                  index={index}
                  memoryWall={memoryWall}
                />
              ) : (
                <div style={{ flex: 1, textAlign: "center" }}>
                  <Header
                    title={memoryWalls[index].title}
                    size={"70px"}
                    margin={"0 20% 0 0"}
                  />
                </div>
              )}
            </div>

            <VisualUpdatesSlider sliderUpdates={memoryWall.sliderUpdates} />
            {isOpenAboutInput ? (
              <UpdateAboutForm
                closeAboutInput={closeAboutInput}
                memoryWallId={memoryWall.id}
                index={index}
                memoryWall={memoryWall}
              />
            ) : (
              <div>
                {role === "admin" ||
                (role === "partialAccess" &&
                  wallPermissions.find((id) => id == memoryWall.id)) ? (
                  <div className="about">
                    <Row>
                      <Col xs={1} md={1} lg={1} xl={1}>
                        <button
                          className="bin-img"
                          onClick={() => {
                            deleteAboutText();
                          }}
                        >
                          <img
                            src="src\assets\images\bin 1.png"
                            alt="bin-img"
                          />
                        </button>
                      </Col>
                      <Col xs={11} md={11} lg={11} xl={11}>
                        <About about={memoryWall.about} />
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <About about={memoryWall.about} />
                )}
              </div>
            )}

            <DeceasedsList
              deceasedsInfo={memoryWall.deceasedsInfo}
              ratingTypes={memoryWall.ratingTypes}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWall.id}
              index={index}
              addNewDeceasedToMemoryWall={addNewDeceasedToMemoryWall}
            />
          </Col>
          <Col xs={12} md={4} lg={4} xl={3}>
            <HighlightsBar
              //highlightsNews={highlightsNews}
              index={index}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWall.id}
              onAddHighlight={addHighlightToMemoryWall}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MemoryWall;
