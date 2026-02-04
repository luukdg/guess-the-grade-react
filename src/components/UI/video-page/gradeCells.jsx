import { motion } from "framer-motion"

const slidePop = {
  idle: { y: 0, scale: 1 },
  pop: {
    y: [-10, 0],
    scale: [1, 1.05, 1],
    transition: { duration: 0.35, ease: "easeOut" },
  },
}

export function GradeCell({ guess, outcome, difference, rounded }) {
  const bgColor =
    outcome === true
      ? "text-green-400 bg-primary-foreground"
      : difference === 1
        ? "text-orange-400 bg-primary-foreground"
        : outcome === false
          ? "text-red-400 bg-primary-foreground"
          : ""

  return (
    <div
      className={`font-archivo-black flex h-full w-full items-center justify-center rounded-sm text-center font-bold ${rounded} border-1 ${bgColor}`}
    >
      <motion.span
        variants={slidePop}
        animate={outcome !== undefined ? "pop" : "idle"}
        initial="idle"
      >
        {guess ?? ""}
      </motion.span>
    </div>
  )
}
