import { useState } from "react";
import "./App.css";
import Background from "./Background";
import LightMode from "./LightMode";
import SideBar from "./SideBar";
import Welcome from "./Welcome";
function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className="App">
      <Background />
      <main id="mainBody">
        <Welcome />
        <div
          id="About Me"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "30%",
              fontSize: "22px",
              background: "rgba(37, 37, 37, 0.5)",
              padding: "10px",
              marginRight: "10px",
            }}
          >
            <p>
              Hi, my name is Ahmad and I am a software developer with experience
              in full stack development using technologies such as React,
              Node.js, and both SQL and non-SQL databases. I have also worked on
              building native applications using languages such as C++, React
              Native, Python, and Swift for various platforms including iOS,
              Android, Windows, Linux, and MacOS. In addition, I have experience
              in developing applications using Microsoft Dynamics, including
              Sharepoint, PowerApps, PowerBi, and Power Automate.
            </p>
          </div>
          <div
            style={{
              width: "30%",
              fontSize: "22px",
              background: "rgba(37, 37, 37, 0.5)",
              padding: "10px",
              marginLeft: "10px",
              marginRight: "15%",
            }}
          ></div>
        </div>
        <footer style={{ height: "1000px" }}></footer>
      </main>
      <SideBar />
      <LightMode lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
