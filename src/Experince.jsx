import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "./Experince.module.css";
import ExperinceCards from "../components/ExperinceCards";
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
    <div
      className="Experince"
      style={{ backgroundColor: "rgba(13, 13, 13, 0.8)" }}
    >
      <div className={styles.title}>
        Experince Projects Work Experince Projects Work
      </div>
      <div id="work" style={{ height: "1000px" }}>
        <ExperinceCards />
      </div>
    </div>
  );
}
export default Experince;
