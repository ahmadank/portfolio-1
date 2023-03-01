import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "./Experince.module.css";
function Experince() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = ".Experince ." + styles.title;
    console.log(title);
    gsap.to(title, {
      scrollTrigger: {
        trigger: ".Experince",
        start: "top bottom",
        scrub: true,
        markers: true,
      },
      x: -1000,
    });
  }, []);
  return (
    <div className="Experince">
      <div className={styles.title}>
        Experince Projects Work Experince Projects Work
      </div>
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
export default Experince;
