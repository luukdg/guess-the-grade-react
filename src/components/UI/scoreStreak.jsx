import { motion } from "framer-motion";

export default function Streak({ streak, setStreak }) {
  return (
    <>
      <motion.p
        key={streak} // Retrigger animation on streak change
        className="pr-3 pl-1 text-4xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15,
        }}
      >
        {streak}
      </motion.p>
    </>
  );
}
