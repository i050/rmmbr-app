import React from "react";
import DeceasedCard from "../DeceasedCard";
import Header from "../Header";
//import { donors } from "../../assets/DB";

const DeceasedsList = ({
  deceasedsInfo,
  ratingTypes,
  role,
  wallPermissions,
  memoryWallId,
}) => {
  console.log(ratingTypes);

  return (
    <div>
      <div>
        <Header
          title={ratingTypes.firstPlace.title}
          size={"50px"}
          margin={"0 39% 0 0"}
        />
        {deceasedsInfo.map((deceased) =>
          deceased.donationAmount >= ratingTypes.firstPlace.minAmount ? (
            <DeceasedCard
              deceased={deceased}
              key={deceased.id}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWallId}
            />
          ) : null
        )}
      </div>
      <div>
        <Header
          title={ratingTypes.secondPlace.title}
          size={"50px"}
          margin={"0 39% 0 0"}
        />
        {deceasedsInfo.map((deceased) =>
          deceased.donationAmount >= ratingTypes.secondPlace.minAmount &&
          deceased.donationAmount < ratingTypes.firstPlace.minAmount ? (
            <DeceasedCard
              deceased={deceased}
              key={deceased.id}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWallId}
            />
          ) : null
        )}
      </div>
      <div>
        <Header
          title={ratingTypes.thirdPlace.title}
          size={"50px"}
          margin={"0 39% 0 0"}
        />
        {deceasedsInfo.map((deceased) =>
          deceased.donationAmount >= ratingTypes.thirdPlace.minAmount &&
          deceased.donationAmount < ratingTypes.secondPlace.minAmount ? (
            <DeceasedCard
              deceased={deceased}
              key={deceased.id}
              role={role}
              wallPermissions={wallPermissions}
              memoryWallId={memoryWallId}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DeceasedsList;
