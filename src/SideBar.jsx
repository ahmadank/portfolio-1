import styles from "./Side.module.css";
import { LinkedIn, Feed, AlternateEmail } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function SideBar() {
  return (
    <div className={styles.sideContainer}>
      <div id="content">
        <div className={styles.text}>
          <div className={styles.btn}>
            <p>About Me</p>
          </div>
          <div className={styles.btn}>
            <p>Experince</p>
          </div>
          <div className={styles.btn}>
            <p>Skills</p>
          </div>
          <div className={styles.btn}>
            <p>Contact Me</p>
          </div>
        </div>
        <div
          id="Logos"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="LinkedIn">
            <LinkedIn fontSize="large" sx={{ fill: "#0072b1" }} />
          </IconButton>
          <IconButton aria-label="Resume">
            <Feed fontSize="large" sx={{ fill: "#0072b1" }} />
          </IconButton>
          <IconButton aria-label="Email">
            <AlternateEmail fontSize="large" sx={{ fill: "#0072b1" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
