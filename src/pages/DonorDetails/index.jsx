import React from "react";
import { useLocation } from "react-router-dom";

const DonorDetails = () => {
  const location = useLocation();
  const donor = location.state?.donor || null;
  return (
    <>
      <h1>DonorDetails</h1>
      <h3>{donor.name}</h3>
    </>
  );
};

export default DonorDetails;
