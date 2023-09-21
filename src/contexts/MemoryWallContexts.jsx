import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchDataFromDatabase } from "../services/apiFetcher.jsx";

const memoryWallContext = createContext();

export function useMemoryWallContext() {
  return useContext(memoryWallContext);
}

export default function MemoryWallProvider({ children }) {
  const [memoryWalls, setMemoryWalls] = useState(null);
  console.log(memoryWalls);
  useEffect(() => {
    fetchDataFromDatabase("http://localhost:3000/api/memoryWall")
      .then((data) => {
        console.log(data);
        setMemoryWalls(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(memoryWalls);
  }, []); // The empty dependency array ensures that this effect runs only once on component mount
  if (memoryWalls === null) {
    return <div>Loading...</div>;
  }
  return (
    <memoryWallContext.Provider value={{ memoryWalls, setMemoryWalls }}>
      {children}
    </memoryWallContext.Provider>
  );
}
