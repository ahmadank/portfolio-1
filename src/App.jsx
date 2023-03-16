import { useState, useRef, useEffect } from "react";
import "./App.css";
import Background from "./Background";
import LightMode from "./LightMode";
import SideBar from "./SideBar";
import Welcome from "./Welcome";
import Experince from "./Experince";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
function App() {
  const [lightMode, setLightMode] = useState(false);
  const mainBodyRef = useRef(null);
  return (
    <div className="App">
      <Background />
      <main id="mainBody" ref={mainBodyRef}>
        <Welcome />
        {/* <AboutMe /> */}
        <div
          id="AboutMe"
          style={{ display: "flex", justifyContent: "center" }}
        />
        <Experince />
        <Skills />
        {/* <footer style={{ height: "1000px" }}></footer> */}
      </main>
      <SideBar />
      {/* <LightMode lightMode={lightMode} setLightMode={setLightMode} /> */}
    </div>
  );
}

export default App;
