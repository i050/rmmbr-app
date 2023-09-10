import React, { createContext, useState, useContext } from "react";
import { memoryWall } from "../assets/DB";

let memoryWallData;

if (localStorage.getItem("memoryWallData") === null) {
  memoryWallData = memoryWall;
  localStorage.setItem("memoryWallData", JSON.stringify(memoryWallData));
  console.log(memoryWallData);
} else {
  const memoryWallLocalStorage = JSON.parse(
    localStorage.getItem("memoryWallData")
  );
  memoryWallData = memoryWallLocalStorage;
  console.log(memoryWallData);
}

const memoryWallContext = createContext();

export function useMemoryWallContext() {
  return useContext(memoryWallContext);
}

export default function MemoryWallProvider({ children }) {
  const [memoryWalls, setMemoryWalls] = useState([...memoryWallData]);
  return (
    <memoryWallContext.Provider value={{ memoryWalls, setMemoryWalls }}>
      {children}
    </memoryWallContext.Provider>
  );
}