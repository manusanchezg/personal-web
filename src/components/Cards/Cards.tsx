import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { mokedInfo } from "./data";

function Cards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex flex-wrap justify-center items-center gap-10 mt-8 mx-auto max-md:flex-col"
    >
      {mokedInfo.map((item) => (
        <Card
          item={item}
          key={item.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          to={item.to}
        />
      ))}
    </motion.div>
  );
}

export default Cards;
