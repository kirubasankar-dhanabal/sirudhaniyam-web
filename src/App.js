import React from "react";
import './App.css';
import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <footer style={{position:'relative', height:50}}>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
