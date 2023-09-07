import React, { useState, useEffect, memo } from "react";
import Header from "../../components/Header";
import DeceasedsList from "../../components/DeceasedsList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HighlightsBar from "../../components/HighlightsBar";
import Container from "react-bootstrap/Container";
import VisualUpdatesSlider from "../../components/VisualUpdatesSlider";
import About from "../../components/About";
import { useLocation } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts"
import "./index.css";

const MemoryWall = () => {
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();

  const { memoryWalls } = useMemoryWallContext();


  const location = useLocation();
  const memoryWall = location.state?.memoryWall || null;

  const [wallPermissions, setWallPermissions] = useState("noPermissions");
  const [role, setRole] = useState("noRole");
  const [highlightsNews, setHighlightsNews] = useState(memoryWall.highlightsNews); // הוספת משתנה סטייט לשמירת העדכונים
console.log(highlightsNews);

  useEffect(() => {
    if (isAuthenticated()) {
      const permissions = authUser().permissions.memoryWalls;
      setWallPermissions([...permissions]);
      setRole(authUser().role);
    } else {
      setRole("noRole");
    }
  }, []);

  

  // פונקציה להוספת עדכון לרשימת העדכונים
  const addHighlightToMemoryWall = (newHighlight) => {
    const updatedHighlights = [...highlightsNews, newHighlight];
    setHighlightsNews(updatedHighlights); // עדכון הסטייט עם העדכונים החדשים
    memoryWalls[memoryWall.id - 1].highlightsNews = updatedHighlights;
    // console.log(memoryWalls);
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
              {role === "admin" || (role === "partialAccess" && wallPermissions.includes(memoryWall.id)) ? (
                <span>
                  <button className="three-dots-btn" type="button">
                    <img
                      className="three-dots"
                      src="src\assets\images\three-dots.png"
                      alt="Three Dots"
                    ></img>
                  </button>
                </span>
              ) : null}
              <div style={{ flex: 1, textAlign: "center" }}>
                <Header
                  title={memoryWall.title}
                  size={"70px"}
                  margin={"0 20% 0 0"}
                />
              </div>
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
              highlightsNews={highlightsNews} // שלח את רשימת העדכונים
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWall.id}
              // מעבירים את הפונקציה להוספת עדכונים כפרופ
              onAddHighlight={addHighlightToMemoryWall} // שלח את הפונקציה
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MemoryWall;










// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header";
// import DeceasedsList from "../../components/DeceasedsList";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import HighlightsBar from "../../components/HighlightsBar";
// import Container from "react-bootstrap/Container";
// import VisualUpdatesSlider from "../../components/VisualUpdatesSlider";
// import About from "../../components/About";
// //import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
// import { useLocation } from "react-router-dom";
// import { useAuthUser } from "react-auth-kit";
// import { useIsAuthenticated } from "react-auth-kit";
// import "./index.css";

// const MemoryWall = () => {
//   const isAuthenticated = useIsAuthenticated();
//   const authUser = useAuthUser();

//   const [wallPermissions, setWallPermissions] =useState("noPermissions");

//   const [role, setRole] = useState("noRole");
//   useEffect(() => {
//     if (isAuthenticated()) {
//       setWallPermissions(authUser().permissions.memoryWalls)
//       setRole(authUser().role);
//     } else {
//       setRole("noRole");
//     }
//   });
//   console.log(wallPermissions);
//   console.log(role);

//   const location = useLocation();
//   const memoryWall = location.state?.memoryWall || null;
//   //console.log(memoryWall.highlightsNews);
//   //console.log(memoryWall);

//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <Col xs={12} md={8} lg={8} xl={9}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginLeft: "10%",
//               }}
//             >
//               {role === "admin" ||(role === "partialAccess" &&wallPermissions.find((id) => id== memoryWall.id)) ? (
//                 <span>
//                   <button className="three-dots-btn" type="button">
//                     <img
//                       className="three-dots"
//                       src="src\assets\images\three-dots.png"
//                     ></img>
//                   </button>
//                 </span>
//               ) : null}
//               <div style={{ flex: 1, textAlign: "center" }}>
//                 <Header
//                   title={memoryWall.title}
//                   size={"70px"}
//                   margin={"0 20% 0 0"}
//                 />
//               </div>
//             </div>

//             <VisualUpdatesSlider sliderUpdates={memoryWall.sliderUpdates} />
//             <About about={memoryWall.about} />
//             <DeceasedsList
//               deceasedsInfo={memoryWall.deceasedsInfo}
//               ratingTypes={memoryWall.ratingTypes}
//               role={role}
//               wallPermissions={wallPermissions}
//               memoryWallId={memoryWall.id}
            
//             />
//           </Col>
//           <Col xs={12} md={4} lg={4} xl={3}>
//             <HighlightsBar
//               highlightsNews={memoryWall.highlightsNews}
//               role={role}
//               wallPermissions={wallPermissions}
//               memoryWallId={memoryWall.id}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default MemoryWall;



