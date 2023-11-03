import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const textArray = text.split("");

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (charIndex < textArray.length) {
          return prevText + textArray[charIndex];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
      charIndex++;
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return <motion.p>{displayedText}</motion.p>;
};

export default TypewriterEffect;
