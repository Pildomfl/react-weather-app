import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />
        <footer>
          This project was coded by Pilar Dominguez and is {""}
          <a
            href="https://github.com/Pildomfl/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          {""} and hosted on
          <a
            href="https://weather-app-byreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
