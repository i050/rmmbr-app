import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const DonorDetails = React.lazy(() => import("./pages/DonorDetails"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/donordetails" element={<DonorDetails />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
