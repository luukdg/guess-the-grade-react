import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function GameOver({ streak, restart }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <motion.div
        className="flex flex-col gap-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl font-semibold">Game Over!</p>
        <p className="text-xl">Your final streak: {streak}</p>
      </motion.div>
      <div className="absolute bottom-10 flex w-full justify-between gap-4 px-6">
        <button className="w-1/2" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="w-1/2" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
}
