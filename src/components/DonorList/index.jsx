import React from "react";
import DonorCard from "../../components/DonorCard";
import "./index.css";

import Header from "../../components/Header";
import Donors from "../../Data";




function DonorList() {
  return (
    <>
      <Header title={"תורמי זהב"} size={"50px"} margin={"0 39% 0 0"}/>
      <div>
        {Donors.map((donor) => donor.status=="gold"? (

          <DonorCard name={donor.name} id={donor.id} key={donor.id} image={donor.image} donor={donor}/>
        ):null)}
      </div>
      <Header title={"תורמי כסף"} size={"50px"} margin={"0 39% 0 0"}/>
      <div>
        {Donors.map((donor) => donor.status=="silver"?(
          <DonorCard name={donor.name} id={donor.id} key={donor.id} donor={donor}/>
          ):null)}
      </div>
      <Header title={"תורמי נחושת"} size={"50px"} margin={"0 39% 0 0"}/>
      <div>
        {Donors.map((donor) => donor.status=="bronze"? (
          <DonorCard name={donor.name} id={donor.id} key={donor.id} donor={donor}/>
          ):null)}
      </div>
    </>
  );
}

export default DonorList;
