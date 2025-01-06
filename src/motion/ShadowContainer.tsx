import { motion } from "motion/react";
import { useState } from "react";

export default function ShadowContainer() {
  const [dragging, setDragging] = useState(false);
  const [time, setTime] = useState(2);
  const [degree, setDegree] = useState(0);
  const add45 = () => {
    setDegree(degree + 45);
    setTime(0.3);
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        dragging ? "bg-blue-700" : "bg-gray-400"
      } duration-500`}
    >
      <motion.div
        drag
        dragConstraints={{ top: -140, right: 140, bottom: 140, left: -140 }}
        className="w-40 h-40 rounded-3xl bg-white cursor-pointer"
        style={{
          // Initial shadow
          boxShadow: "0px -300px 80px 100px rgba(100, 100, 250, 0.7)",
        }}
        initial={{ backgroundColor: "#fff" }}
        animate={{
          backgroundColor: "#08f",
          boxShadow: "0px 0px 80px 30px #fff",
          transition: { duration: time },
          rotate: degree,
          scale: 1,
        }}
        onTap={add45}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      />
    </div>
  );
}
