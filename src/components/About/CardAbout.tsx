import { AnimationControls, motion } from "framer-motion";

const CardAbout = ({
  jobTitle,
  company,
  duration,
  description,
  controls,
  ref,
}: {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
  controls: AnimationControls;
  ref: (node?: Element | null | undefined) => void;
}) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1 }}
      className="bg-white p-4 mb-4 shadow rounded border"
    >
      <h3 className="text-lg font-semibold">{jobTitle}</h3>
      <p className="text-sm mb-2 text-gray-500">{company}</p>
      <p className="text-sm mb-2 text-gray-500">{duration}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </motion.div>
  );
};

export default CardAbout;
