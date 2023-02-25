import { useState } from "react";
import "./App.css";
import Background from "./Background";
import LightMode from "./LightMode";
import SideBar from "./SideBar";
function App() {
  const [lightMode, setLightMode] = useState(false);
  // const changeColor = () => {
  //   darkMode
  //     ? (document.body.className = "light-mode")
  //     : (document.body.className = "dark-mode");
  //   document.body.style.setProperty(
  //     "--cards",
  //     darkMode ? "#3e3e28" : "#f88cfc"
  //   );
  //   //F79696
  //   darkMode = !darkMode;
  // };
  return (
    <div className="App">
      <Background />
      <SideBar />
      <LightMode lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  );
}

export default App;
