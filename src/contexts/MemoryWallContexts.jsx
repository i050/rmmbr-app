import React, { createContext, useState, useContext } from "react";
import { memoryWall } from "../assets/DB";

const memoryWallContext = createContext();

export function useMemoryWallContext() {
  return useContext(memoryWallContext);
}

export default function MemoryWallProvider({ children }) {
  const [memoryWalls, setMemoryWalls] = useState([...memoryWall]);

  return (
    <memoryWallContext.Provider value={{ memoryWalls, setMemoryWalls }}>
      {children}
    </memoryWallContext.Provider>
  );
}
