import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import Icons from "../Icons/Icons";

interface Item {
  id: string;
  subtitle: string;
  title: string;
}

function Card({ items }: { items: Item[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer rounded-md border drop-shadow-3xl w-60"
        >
          <motion.div
            transition={easeInOut}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-1/2 w-96"
                transition={easeInOut}
                layoutId={selectedId}
                animate={{ scale: 2 }}
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button
                  className="fixed top-1 right-1"
                  onClick={() => setSelectedId(null)}
                >
                  <Icons icon="cross" size={2} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}

export default Card;
