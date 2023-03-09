import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";
import styles from "./Experince.module.css";
import ExperinceCards from "../components/ExperinceCards";

import { work, projects } from "./workExperince.js";
function Experince() {
  const [hoveredExperince, setHoveredExperince] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = "#WorkExperince ." + styles.title;
    gsap.to(title, {
      scrollTrigger: {
        trigger: "#WorkExperince",
        start: "top bottom",
        scrub: true,
        markers: true,
      },
      x: -1000,
    });

    const t2 = "#PersonalExperince ." + styles.title;
    gsap.to(t2, {
      scrollTrigger: {
        trigger: "#PersonalExperince",
        start: "top bottom",
        scrub: true,
        markers: true,
      },
      x: +1000,
    });
  }, []);
  // useEffect(() => {
  //   const newText = hoveredExperince;

  //   const tl = gsap.timeline();
  //   tl.to(textRef.current, {
  //     duration: 0.4,
  //     x: "-100%",
  //     opacity: 0,
  //     onComplete: () => {
  //       textRef.current.innerHTML = newText;
  //       gsap.fromTo(
  //         textRef.current,
  //         {
  //           x: "100%",
  //           opacity: 0,
  //         },
  //         {
  //           duration: 0.3,
  //           x: "0%",
  //           opacity: 1,
  //         }
  //       );
  //     },
  //   });
  // }, [hoveredExperince]);
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
        style={{ backgroundColor: "rgba(13, 13, 13, 0.8)" }}
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
          {/* <div
          style={{
            width: "10vw",
            height: "30vh",
            left: "-0px",
            position: "absolute",
            zIndex: 1,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              transform: "rotate(270deg)",
              color: "white",
              whiteSpace: "nowrap",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Work Experince
          </p>
        </div> */}
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
        style={{ backgroundColor: "rgba(13, 13, 13, 0.8)" }}
      >
        <div
          style={{ left: "-60%", position: "relative" }}
          className={styles.title}
        >
          Projects Personal Experince Projects
        </div>
        {/* <div
        style={{ height: "150px", textAlign: "center" }}
        className={styles.title}
        ref={textRef}
      ></div> */}
        <div
          id="projects"
          style={{
            marginLeft: "50px",
            display: "flex",
            height: "30vh",
            overflowX: "scroll",
            paddingRight: "100px",
          }}
        >
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
