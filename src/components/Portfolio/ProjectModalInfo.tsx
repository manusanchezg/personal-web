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
        <div className="absolute h-full w-full top-0 left-0 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="relative m-20 p-10 dark:bg-slate-900 dark:text-slate-200 bg-white rounded-2xl">
          <TypewriterEffect
            text={information}
            handleTypingComplete={handleTypingComplete}
            isOpen={buttonClicked}
            style="text-xl font-semibold"
          />
        <motion.button
            className="absolute top-1 right-1"
            onClick={() => {
              handleClick();
              handleTypingComplete();
            }}
          >
            <Icons icon="cross" size={5} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModalInfo;
