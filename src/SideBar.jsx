import styles from "./Side.module.css";
import { LinkedIn, Feed, AlternateEmail } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function SideBar() {
  return (
    <div className={styles.sideContainer}>
      <div className={styles.text}>
        <p>About Me</p> <br />
        <p>Experince</p>
        <br />
        <p>Skills</p>
        <br />
        <p>Contact Me</p>
        <br />
      </div>
      <div id="Logos">
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
  );
}
export default SideBar;
