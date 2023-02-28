import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Welcome.module.css";

const Wrapper = ({ children }) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{children}</span>;
};

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const AnimatedCharacters = ({ text, type }) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const words = text.split(" ").map((word) => [...word, "\u00A0"]);

  const Tag = tagMap[type];

  return (
    <Tag>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.map((letter, index) => (
            <span
              key={index}
              style={{ overflow: "hidden", display: "inline-block" }}
            >
              <motion.span style={{ display: "inline-block" }} variants={item}>
                {letter}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

function Welcome() {
  const placeholderText = [
    { type: "heading1", text: "Hey," },
    { type: "paragraph", text: "I'm Ahmad Kamar." },
    { type: "paragraph", text: "a software developer" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      id="WelcomeText"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className={styles.main}>
        {placeholderText.map((item, index) => (
          <AnimatedCharacters key={index} text={item.text} type={item.type} />
        ))}
      </div>
    </motion.div>
  );
}

export default Welcome;
