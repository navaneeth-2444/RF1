import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Model1 from "./model1";
import Model2 from "./model2";

const models = [Model1, Model2];

function Content() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous
  const ModelComponent = models[index];

  const prevModel = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? models.length - 1 : prevIndex - 1));
  };

  const nextModel = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="con" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Previous Button */}
      <button onClick={prevModel} className="prev">
        <img src="src/assets/next.png" alt="Previous" style={{ width: "100px", height: "100px" }} />
      </button>

      {/* Model Container */}
      <div style={{ position: "relative", overflow: "hidden", width: "500px", height: "500px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: direction * 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 500, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <ModelComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button onClick={nextModel} className="next">
        <img src="src/assets/prev.png" alt="Next" style={{ width: "100px", height: "100px" }} />
      </button>
    </div>
  );
}

export default Content;
