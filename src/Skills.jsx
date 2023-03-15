import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./skills.module.css";
// import styles from "./background.module.css";
function Skills() {
  const first = useRef(null);

  return (
    <div className={styles.marquee}>
      <div class={styles.marqueeInner}>
        <span style={{ float: "left", width: "50%" }}>
          <div className={styles.orb}>
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src="QT.png"
            ></img>
          </div>
        </span>
        <span style={{ float: "left", width: "50%" }}>
          <div className={styles.orb}>
            <img
              style={{ maxWidth: "100%", borderRadius: "50%" }}
              src="QT.png"
            ></img>
          </div>
        </span>
      </div>
      <div class={styles.marqueeInner}>
        <span style={{ float: "left", width: "50%" }}>
          <div className={styles.orb}>
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src="QT.png"
            ></img>
          </div>
        </span>
        <span style={{ float: "left", width: "50%" }}>
          <div className={styles.orb}>
            <img
              style={{ maxWidth: "100%", borderRadius: "50%" }}
              src="QT.png"
            ></img>
          </div>
        </span>
      </div>
    </div>
  );
}
export default Skills;
