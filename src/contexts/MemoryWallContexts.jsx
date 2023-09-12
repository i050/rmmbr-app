import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchDataFromDatabase } from "../services/apiFetcher.jsx";

const memoryWallContext = createContext();

export function useMemoryWallContext() {
  return useContext(memoryWallContext);
}

export default function MemoryWallProvider({ children }) {
  const [memoryWalls, setMemoryWalls] = useState([]);

  useEffect(() => {
    // Fetch data from the database and update state in useEffect
    fetchDataFromDatabase("http://localhost:3000/api/memoryWall")
      .then((data) => {
        console.log(data);
        if (localStorage.getItem("memoryWallData") === null) {
          // Update state with the fetched data
          setMemoryWalls(data);
          // Store the data in localStorage
          localStorage.setItem("memoryWallData", JSON.stringify(data));
        } else {
          const memoryWallLocalStorage = JSON.parse(
            localStorage.getItem("memoryWallData")
          );
          setMemoryWalls(memoryWallLocalStorage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <memoryWallContext.Provider value={{ memoryWalls, setMemoryWalls }}>
      {children}
    </memoryWallContext.Provider>
  );
}


// import React, { createContext, useState, useContext } from "react";
// import { fetchDataFromDatabase } from "../services/apiFetcher.jsx";
// //import { memoryWall } from "../assets/DB";

// let memoryWallData;

// fetchDataFromDatabase("http://localhost:3000/api/memoryWall")
//   .then((data) => {
//     // Handle the data from multiple requests here
//     console.log(data);
//     if (localStorage.getItem("memoryWallData") === null) {
//       memoryWallData = data;
//       localStorage.setItem("memoryWallData", JSON.stringify(memoryWallData));
//       console.log(memoryWallData);
//     } else {
//       const memoryWallLocalStorage = JSON.parse(
//         localStorage.getItem("memoryWallData")
//       );
//       memoryWallData = memoryWallLocalStorage;
//       console.log(memoryWallData);
//     }
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during the requests
//     console.error(error);
//   });
// //console.log(memoryWall);

// const memoryWallContext = createContext();

// export function useMemoryWallContext() {
//   return useContext(memoryWallContext);
// }

// export default function MemoryWallProvider({ children }) {
//   const [memoryWalls, setMemoryWalls] = useState([...memoryWallData]);
//   return (
//     <memoryWallContext.Provider value={{ memoryWalls, setMemoryWalls }}>
//       {children}
//     </memoryWallContext.Provider>
//   );
// }