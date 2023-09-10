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
import ThreeDotsAdminDropdown from "../../components/ThreeDotsAdminDropdown";
import UpdateHederForm from "../../components/UpdateHederForm"; 
import "./index.css";
const MemoryWall = () => {
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();

  const location = useLocation();
  const memoryWall = location.state?.memoryWall || null;
  //console.log(memoryWall.highlightNews);
  const [role, setRole] = useState("noRole");
  const [wallPermissions, setWallPermissions] = useState("noPermissions");
  const [highlightsNews, setHighlightsNews] = useState(
    memoryWall.highlightsNews
  );
  const [isOpenTitleInput, setIsOpenTitleInput] = useState(false);

  const addHighlightToMemoryWall = (newHighlight) => {
    const updateHighlight = [...highlightsNews, newHighlight];
    setHighlightsNews(updateHighlight);
    //console.log(highlightsNews);
    memoryWalls[memoryWall.id - 1].highlightsNews = updateHighlight;
    setMemoryWalls(memoryWalls); //because there is no backend
    console.log(memoryWalls);
    localStorage.setItem("memoryWallData", JSON.stringify(memoryWalls)); //because there is no backend
  };
  //console.log(memoryWalls); //test
  //console.log(highlightsNews); //test

  useEffect(() => {
    if (isAuthenticated()) {
      setRole(authUser().role);
      setWallPermissions(authUser().permissions.memoryWalls);
    } else {
      setRole("noRole");
    }
  });

  //console.log(role);
  //console.log(wallPermissions);

  //console.log(memoryWall.highlightsNews);
  //console.log(memoryWall);
  //&& wallPermissions.find(id=>id==))
  console.log(isOpenTitleInput);
  const updateTitleInput = (bool) => {
    setIsOpenTitleInput(bool);
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
                 
                  <ThreeDotsAdminDropdown updateTitleInput={updateTitleInput} />
                </span>
              ) : null}

              {isOpenTitleInput ? (
            <UpdateHederForm/>
              ) : (
                <div style={{ flex: 1, textAlign: "center" }}>
                  <Header
                    title={memoryWall.title}
                    size={"70px"}
                    margin={"0 20% 0 0"}
                  />
                </div>
              )}
            </div>

            <VisualUpdatesSlider sliderUpdates={memoryWall.sliderUpdates} />
            <About about={memoryWall.about} />
            <DeceasedsList
              deceasedsInfo={memoryWall.deceasedsInfo}
              ratingTypes={memoryWall.ratingTypes}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWall.id}
            />
          </Col>
          <Col xs={12} md={4} lg={4} xl={3}>
            <HighlightsBar
              highlightsNews={highlightsNews}
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
