import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
        <div key={item.id} className="cursor-pointer">
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>

          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
}

export default Card;
