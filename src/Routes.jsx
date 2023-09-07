import React from "react";
import { Routes, Route } from "react-router-dom";
import DonorDetails from "./pages/DonorDetails";
import LogInGoogle from "./components/LogInGoogle"
import MemoryPageForm from "./pages/memoryPageForm";
import MemoryWall from "./pages/MemoryWall";
// import Home from "./pages/Home";

const Home = React.lazy(() => import("./pages/Home"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-wall" element={<MemoryWall />} />
        <Route path="/login-google" element={<LogInGoogle />} />
        <Route path="/deceased-details" element={<DonorDetails />} />
        <Route path="/memory-page-form" element={<MemoryPageForm />} />
        <Route path="*" element={<h1>404 - Page not found</h1>} />
      </Routes>
    </React.Suspense>
  );
};
export default ProjectRoutes;
