import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
const Home = React.lazy(() => import("./pages/Home"));
const DonorDetails = React.lazy(() => import("./pages/DonorDetails"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/donordetails" element={<DonorDetails />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </React.Suspense>
  );
};
export default ProjectRoutes;
