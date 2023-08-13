import React from 'react'
import { useLocation } from 'react-router-dom';

function DonorDetails() {
   const location = useLocation();
   const donor = location.state.donor;
    console.log(donor);
    return (
    <div><b>Donor Details</b>
    <div>Donor Name: {donor.name}</div>
    <div>Donor Status: {donor.status}</div>
    </div>
  )
}

export default DonorDetails