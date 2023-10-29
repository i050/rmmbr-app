import React from "react";
import { useMemoryWallContext } from "../../contexts/MemoryWallContexts";
import { useLocation } from "react-router-dom";
import EditUpdatesSlider from "../EditUpdatesSlider";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";


const UpdateSchema = Yup.object().shape({
    text: Yup.string(),
    imagePath: Yup.string().required("חובה להעלות תמונה"),
  });
  

function ListEditUpdateSlider() {
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();
  const location = useLocation();

  const index = location.state?.index;
  const memoryWall = memoryWalls[index];

  return (
    <div>
          <h1>עריכת עדכונים</h1>
      <div>
        <p>:עדכון חדש</p>

      </div>

      {memoryWall.sliderUpdates.map((update, index) => (
  <EditUpdatesSlider key={index} updateIndex={index} />
))}
    </div>
  );
}

export default ListEditUpdateSlider;
