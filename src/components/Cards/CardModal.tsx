import { AnimatePresence, motion } from "framer-motion";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import { Item } from "./Card";

function CardModal({
  selectedId,
  item,
  setSelectedId,
  to,
}: {
  item: Item;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  to: string;
}) {
  return (
    <AnimatePresence>
      {selectedId === item.id && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="relative bg-white rounded-lg shadow-md p-4 dark:bg-gray-800 max-h-[80vh] w-1/2"
            transition={{ type: "spring", duration: 0.3 }}
            layoutId={selectedId}
          >
            <motion.h2 className="text-2xl font-bold mt-2 dark:text-slate-300">
              {item.title}
            </motion.h2>
            <motion.h5 className="text-xl font-semibold dark:text-slate-300">
              {item.subtitle}
            </motion.h5>
            <motion.p>{item.body}</motion.p>
            <motion.button
              className="absolute top-2 right-2 text-gray-500 dark:bg-gray-800"
              onClick={() => setSelectedId(null)}
            >
              <Icons icon="cross" size={10} />
            </motion.button>
            <Link
              className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-xl w-32"
              to={to}
            >
              See more
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CardModal;
