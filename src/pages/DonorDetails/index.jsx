import React from "react";
import { useLocation } from "react-router-dom";

const DonorDetails = () => {
  const location = useLocation();
  const deceased = location.state?.deceased || null;
  return (
    <>
      <h1>DonorDetails</h1>
      <h3>{deceased.name}</h3>
    </>
  );
};

export default DonorDetails;
