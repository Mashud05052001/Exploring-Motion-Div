import { motion } from "motion/react";
import { useState } from "react";

export default function ShadowContainer() {
  const [dragging, setDragging] = useState(false);
  const [degree, setDegree] = useState(0);

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        dragging ? "bg-blue-700" : "bg-gray-400"
      } duration-500`}
    >
      <motion.div
        drag
        dragConstraints={{ top: -140, right: 140, bottom: 140, left: -140 }}
        className="w-40 h-40 rounded-3xl bg-white cursor-pointer relative"
        style={{
          // Initial shadow
          boxShadow: "0px -300px 80px 100px rgba(100, 100, 250, 0.7)",
        }}
        initial={{ backgroundColor: "#fff" }}
        animate={{
          backgroundColor: "#08f",
          boxShadow: "0px 0px 80px 30px #fff",
          rotate: degree,
          scale: 1,
        }}
        transition={{
          duration: 2,
          rotate: {
            duration: 0.3,
          },
          scale: {
            duration: 0.2,
          },
        }}
        onTap={() => setDegree(degree + 45)}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        whileHover={{
          scale: 1.2,
        }}
      >
        <motion.div
          className={`${
            dragging ? "bg-gray-300" : "bg-blue-600"
          } w-10 h-10 rounded-full absolute -top-10 -left-10`}
          animate={{ rotate: 360 }}
          style={{ originX: 3, originY: 3 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}
