import React, { useEffect } from "react";
import Header from "../../components/Header";
import DeceasedsList from "../../components/DeceasedsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HighlightsBar from "../../components/HighlightsBar";
import Container from "react-bootstrap/Container";
import VisualUpdatesSlider from "../../components/VisualUpdatesSlider";
import About from "../../components/About";
//import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
import { useLocation } from "react-router-dom";

const MemoryWall = () => {
  const location = useLocation();
  const memoryWall = location.state?.memoryWall || null;
  //console.log(memoryWall.highlightsNews);
  //console.log(memoryWall);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} lg={8} xl={9}>
            <Header
              title={memoryWall.title}
              size={"70px"}
              margin={"0 20% 0 0 "}
            />
            <VisualUpdatesSlider sliderUpdates={memoryWall.sliderUpdates} />
            <About about={memoryWall.about} />
            <DeceasedsList
              deceasedsInfo={memoryWall.deceasedsInfo}
              ratingTypes={memoryWall.ratingTypes}
            />
          </Col>
          <Col xs={12} md={4} lg={4} xl={3}>
            <HighlightsBar highlightsNews={memoryWall.highlightsNews} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MemoryWall;
