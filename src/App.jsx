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
      </main>
      <SideBar />
      <LightMode lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
