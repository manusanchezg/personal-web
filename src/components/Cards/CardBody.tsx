import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterEffect = ({
  text,
  style = "",
  isOpen,
  handleTypingComplete,
}: {
  text: string;
  style?: string;
  isOpen: boolean;
  handleTypingComplete: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const textArray = text.split("");

    if (isOpen) {
      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => {
          if (charIndex < textArray.length) {
            return prevText + textArray[charIndex];
          } else {
            clearInterval(intervalId);
            handleTypingComplete();
            return prevText;
          }
        });
        charIndex++;
      }, 30);

      return () => clearInterval(intervalId);
    } else {
      setDisplayedText("");
    }
  }, [text, isOpen]);

  return <motion.p className={style}>{displayedText}</motion.p>;
};

export default TypewriterEffect;
