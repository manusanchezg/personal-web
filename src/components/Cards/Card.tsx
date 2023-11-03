import { motion } from "framer-motion";
import { useIsSideBarOpen } from "../../hooks/useIsSideBarOpen";
import CardModal from "./CardModal";

export interface Item {
  id: string;
  subtitle: string;
  title: string;
  body: string;
}

function Card({
  item,
  selectedId,
  setSelectedId,
  to,
}: {
  item: Item;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  to: string;
}) {
  const { isSidebarOpen, setIsSidebarOpen } = useIsSideBarOpen();
  const handleOnclick = () => {
    if (window.innerWidth > 650 || !isSidebarOpen) setSelectedId(item.id);
  };
  return (
    <>
      <div
        className={`cursor-pointer relative rounded-lg overflow-hidden w-2/5 max-md:w-3/5 scroll-smooth ${
          selectedId ? "hidden" : "border"
        }`}
        style={{ zIndex: selectedId === item.id ? 1 : 0 }}
      >
        <motion.div
          transition={{ type: "spring", duration: 0.3 }}
          layoutId={item.id}
          onClick={handleOnclick}
          className="p-4 h-44"
        >
          <motion.h2 className="text-2xl font-bold mt-2 dark:text-slate-300">
            {item.title}
          </motion.h2>
          <motion.h5 className="text-xl font-semibold dark:text-slate-300">
            {item.subtitle}
          </motion.h5>
        </motion.div>
      </div>
      <CardModal
        selectedId={selectedId}
        to={to}
        item={item}
        setSelectedId={setSelectedId}
      />
    </>
  );
}

export default Card;
