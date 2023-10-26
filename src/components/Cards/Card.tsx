import { AnimatePresence, motion } from "framer-motion";
import Icons from "../Icons/Icons";
import { useIsSideBarOpen } from "../../hooks/useIsSideBarOpen";

interface Item {
  id: string;
  subtitle: string;
  title: string;
  body: string;
}

function Card({
  item,
  selectedId,
  setSelectedId,
}: {
  item: Item;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}) {
  const { isSidebarOpen, setIsSidebarOpen } = useIsSideBarOpen();
  const handleOnclick = () => {
    if (window.innerWidth > 650 || !isSidebarOpen) setSelectedId(item.id);
  };
  return (
    <>
      <div
        className={`cursor-pointer relative rounded-lg overflow-hidden w-2/5 ${
          selectedId ? "hidden" : "border"
        }`}
        style={{ zIndex: selectedId === item.id ? 1 : 0 }}
      >
        <motion.div
          transition={{ type: "spring", duration: 0.3 }}
          layoutId={item.id}
          onClick={handleOnclick}
          className="p-4 h-40"
        >
          <motion.h2 className="text-2xl font-bold mt-2 dark:text-slate-300">
            {item.title}
          </motion.h2>
          <motion.h5 className="text-xl font-semibold dark:text-slate-300">
            {item.subtitle}
          </motion.h5>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedId === item.id && (
          <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              className="relative bg-white rounded-lg shadow-md p-4 dark:bg-gray-800 max-h-[80vh] w-1/2 overflow-scroll"
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
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setSelectedId(null)}
              >
                <Icons icon="cross" size={5} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
