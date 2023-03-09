import { useState } from "react";
import styles from "./ExperinceCards.module.css";
function ExperinceCards({ experince, setHoveredExperince }) {
  // console.log(experince.title);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.experince}
      onMouseEnter={() => {
        setHoveredExperince(experince.title);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredExperince("");
        setHovered(false);
      }}
    >
      {hovered && (
        <div
          class="Test"
          style={{
            borderRadius: "10%",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1,
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          {experince.title}
        </div>
      )}
      <img
        width="100%"
        height="100%"
        style={{
          borderRadius: "10%",
          position: "absolute",
          top: "0",
        }}
        src={experince.image}
      />
    </div>
  );
}
export default ExperinceCards;
