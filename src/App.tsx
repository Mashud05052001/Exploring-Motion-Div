import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    // stiffness: 100,
    damping: 20,
    restDelta: 0.01,
  });
  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <motion.div
        // style={{ originY: 1 }}
        animate={{ rotateX: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-20 h-20 bg-red-200 rounded-md absolute top-80 left-20"
      ></motion.div>
      <div className="flex items-center justify-center h-screen relative">
        <AnimatePresence initial={false}>
          {show ? (
            <motion.div
              // initial={{ scale: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                skew: -10,
                rotate: 45,
              }}
              transition={{ type: "spring" }}
              initial={{
                backgroundColor: "rgb(0, 255, 0)",
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                backgroundColor: "rgb(255, 0, 0)",
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.95 }}
              // onHoverStart={() => console.log("hover started!")}
              // onHoverEnd={() => console.log("hover end!")}
              className=" text-white font-bold text-2xl flex justify-center items-center w-40 h-40 rounded-lg select-none"
            >
              Mashud
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div className="absolute top-3/4 -translate-y-24 left-1/2 -translate-x-1/2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow(!show)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white "
          >
            {show ? "Hide" : "Show"}
          </motion.button>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <motion.div
          // initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
          whileInView={{
            backgroundColor: "rgb(255, 0, 0)",
            opacity: 1,
            transition: { duration: 1 },
          }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
          // onHoverStart={() => console.log("hover started!")}
          // onHoverEnd={() => console.log("hover end!")}

          className=" text-white font-bold text-2xl flex justify-center items-center w-40 h-40 rounded-lg select-none"
        >
          Mashud
        </motion.div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <motion.div
          // initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
          whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
          // onHoverStart={() => console.log("hover started!")}
          // onHoverEnd={() => console.log("hover end!")}

          className=" text-white font-bold text-2xl flex justify-center items-center w-40 h-40 rounded-lg select-none"
        >
          Mashud
        </motion.div>
      </div>
    </div>
  );
}

export default App;
