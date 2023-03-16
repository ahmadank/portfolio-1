import { useState } from "react";
import { gsap } from "gsap";
import styles from "./skills.module.css";
// import styles from "./background.module.css";
function Skills() {
  const skills = [
    "C.png",
    "C++.png",
    "CSS.png",
    "HTML.png",
    "Java.png",
    "JavaScript.png",
    "Python.png",
    "Ruby.png",
    "Apex.jpeg",
    "SQL.png",
    "Swift.png",
    "TypeScript.jpeg",
    "Haskell.png",
    "Prolog.png",
    "HTML.png",
    "Java.png",
    "JavaScript.png",
    "Python.png",
  ];

  const frameworks = [
    "Azure.png",
    "Github.png",
    "GraphQL.png",
    "Jenkins.png",
    "Jira.png",
    "Jquery.png",
    "MongoDB.png",
    "GraphQL.png",
    "PostgreSQL.png",
    "Kubernetes.png",
    "Vite.png",
    "NextJS.png",
    "React.png",
    "Xcode.png",
    "GraphQL.png",
    "PostgreSQL.png",
    "Kubernetes.png",
    "Vite.png",
  ];
  const [hover, setHover] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px 0",
        backgroundColor: "rgba(13, 13, 13, 1)",
      }}
    >
      <div
        style={{
          width: "100vw",
          borderStyle: "solid",
          height: "0.1px",
          margin: "0 0 10px 0",
          borderColor: "black",
        }}
      ></div>
      <div className={styles.title}>Languages</div>
      <div className={styles.language}>
        <div className={styles.skills}>
          <div className={styles.skillsInner}>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {skills.map((lang, index) => {
                return (
                  <div
                    className={styles.skill}
                    key={lang + index}
                    onMouseEnter={() => {
                      setHover(index);
                    }}
                  >
                    {index == hover && (
                      <div
                        style={{
                          position: "absolute",
                          textAlign: "center",
                          width: "100px",
                          height: "100px",
                          backgroundColor: "rgba(0,0,0,0.8)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {lang.split(".")[0]}
                      </div>
                    )}
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {skills.map((lang, index) => {
                return (
                  <div
                    className={styles.skill}
                    key={lang + "s" + index}
                    onMouseEnter={(key) => {}}
                  >
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.title}>
        Tools <br />& Frameworks
      </div>
      <div className={styles.framework}>
        <div className={styles.skills}>
          <div className={styles.skillsInner}>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {frameworks.map((lang, index) => {
                return (
                  <div className={styles.skill} key={lang + "f" + index}>
                    <img className={styles.img} src={lang}></img>
                  </div>
                );
              })}
            </span>
            <span style={{ float: "left", width: "50%", height: "200px" }}>
              {frameworks.map((lang, index) => {
                return (
                  <div className={styles.skill} key={lang + "fs" + index}>
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
