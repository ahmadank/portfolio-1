import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import styles from "./Experince.module.css";
import ExperinceCards from "../components/ExperinceCards";

import { work, projects } from "./workExperince.js";
function Experince() {
  const [hoveredExperince, setHoveredExperince] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = "#WorkExperince ." + styles.title;
    gsap.to(title, {
      scrollTrigger: {
        trigger: "#WorkExperince",
        start: "top bottom",
        scrub: true,
      },
      x: -1000,
    });

    const t2 = "#PersonalExperince ." + styles.title;
    gsap.to(t2, {
      scrollTrigger: {
        trigger: "#PersonalExperince",
        start: "top bottom",
        scrub: true,
      },
      x: +1000,
    });
  }, []);

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter("._experince_1cs5f_1", "skewY", "deg"),
      clamp = gsap.utils.clamp(-10, 10);
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set("._experince_1cs5f_1", {
      transformOrigin: "right center",
      force3D: true,
    });
  });

  return (
    <>
      <div
        id="WorkExperince"
        style={{ backgroundColor: "rgba(13, 13, 13, 1)" }}
      >
        <div className={styles.title}>
          Work Experince Professional Experince Work Experince
        </div>
        <div
          id="work"
          style={{
            marginLeft: "50px",
            display: "flex",
            height: "30vh",
            overflow: "hidden",
          }}
        >
          {work.map((job) => {
            return (
              <ExperinceCards
                key={job.title}
                experince={job}
                setHoveredExperince={setHoveredExperince}
              />
            );
          })}
        </div>
      </div>
      <div
        id="PersonalExperince"
        style={{ backgroundColor: "rgba(13, 13, 13, 1)" }}
      >
        <div
          style={{ left: "-60%", position: "relative" }}
          className={styles.title}
        >
          Projects Personal Experince Projects
        </div>
        <div className={styles.project}>
          {projects.map((project) => {
            return (
              <ExperinceCards
                key={project.title}
                experince={project}
                setHoveredExperince={setHoveredExperince}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Experince;
