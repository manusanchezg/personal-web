import { motion } from "framer-motion";
import TypewriterEffect from "../Cards/CardBody";
import Icons from "../Icons/Icons";
import { useIsTypingComplete } from "../../hooks";

function ProjectModalInfo({
  buttonClicked,
  information,
  handleClick,
}: {
  buttonClicked: boolean;
  information: string;
  handleClick: () => void;
}) {
  const { isTypingComplete, setIsTypingComplete } = useIsTypingComplete();

  const handleTypingComplete = () => {
    setIsTypingComplete(!isTypingComplete);
  };
  return (
    <div
      className={`${
        buttonClicked ? "" : "hidden"
      } absolute h-full w-full top-0 left-0`}
    >
      <div className="absolute h-full w-full top-0 left-0 backdrop-blur-sm flex items-center justify-center">
        <TypewriterEffect
          text={information}
          handleTypingComplete={handleTypingComplete}
          isOpen={buttonClicked}
          style="text-xl font-semibold dark:bg-slate-900 dark:text-slate-200 bg-white"
        />
        <motion.button
          className="absolute top-3 right-3"
          onClick={() => {
            handleClick();
            handleTypingComplete();
          }}
        >
          <Icons icon="cross" size={10} />
        </motion.button>
      </div>
    </div>
  );
}

export default ProjectModalInfo;
