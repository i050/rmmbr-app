//import { useState } from "react";
import Routes from "./Routes";
import "./App.css";
import UpBar from "./layout/UpBar";
import MemoryWallProvider from "./contexts/MemoryWallContexts";
import LoginPopUp from "./components/LoginPopUp";

function App() {
  return (
    <div className="app">
      <MemoryWallProvider>
        <UpBar />
        <LoginPopUp/>
        <Routes />
      </MemoryWallProvider>
      <div style={{ backgroundColor: "#022855", height: "50px" }}></div>
    </div>
  );
}

export default App;
