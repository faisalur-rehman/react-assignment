import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dinner from "./dinner.js";

function App() {
  return (
    <div className="App">
      <Dinner dishName="Pulao" sweetDish="Custard" />
      <br />
      <Dinner dishName="Dumba Karahi" sweetDish="Russian Salad" />
    </div>
  );
}

export default App;
