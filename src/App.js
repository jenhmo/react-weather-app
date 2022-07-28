import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vienna" />

        <footer>
       This project was coded by Jen Morgan and is{" "}
     <a href="https://github.com/jenhmo/react-weather-app" target="_blank" rel="noreferrer">
      open-sourced
     </a>
     </footer>
      </div>
    </div>
  );
}
