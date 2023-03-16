import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./skills.module.css";
// import styles from "./background.module.css";
function Skills() {
  const skills = [
    "c.png",
    "c++.png",
    "css.png",
    "html.png",
    "java.png",
    "js.png",
    "python.png",
    "ruby.png",
    "salesforce.jpeg",
    "sql.png",
    "swift.png",
    "ts.jpeg",
    "haskell.png",
    "prolog.png",
  ];

  const frameworks = [
    "azure.png",
    "github.png",
    "graphql.png",
    "jenkins.png",
    "jira.png",
    "jquery.png",
    "mongodb.png",
    "next.png",
    "react.png",
    "xcode.png",
    "graphql.png",
    "postgre.png",
    "kubernetes.png",
    "vite.png",
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className={styles.language}>
        <div className={styles.skills}>
          <div className={styles.skillsInner}>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {skills.map((lang) => {
                return (
                  <div className={styles.skill}>
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {skills.map((lang) => {
                return (
                  <div className={styles.skill}>
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.framework}>
        <div className={styles.skills}>
          <div className={styles.skillsInner}>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {frameworks.map((lang) => {
                return (
                  <div className={styles.skill}>
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {frameworks.map((lang) => {
                return (
                  <div className={styles.skill}>
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
