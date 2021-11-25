import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Header/>
      {/* <Navbar/> */}
      <Dashboard/>
      {/* <div style={{position:'relative', height:50}}></div> */}
    </div>
  );
}

export default App;
