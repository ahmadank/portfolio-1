import styles from "./ExperinceCards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function ExperinceCards({ experince, setHoveredExperince }) {
  console.log(experince.title);

  return (
    <div
      className={styles.experince}
      onMouseEnter={() => setHoveredExperince(experince.title)}
      onMouseLeave={() => setHoveredExperince("")}
    >
      <img
        width="100%"
        height="100%"
        style={{ borderRadius: "10%" }}
        src={experince.image}
      />
    </div>
  );
}
export default ExperinceCards;
