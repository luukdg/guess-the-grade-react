import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { saveStreakToLocalStorage } from "../../api/localStorage/streakLocalStorage";

export default function GameOver({ streak, restart }) {
  const navigate = useNavigate();

  useEffect(() => {
    saveStreakToLocalStorage(streak);
  }, [streak]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <motion.div
        className="flex flex-col gap-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl font-semibold">Game Over!</p>
        <p className="text-xl">
          Your final score: <strong>{streak}</strong>
        </p>
      </motion.div>
      <div className="absolute bottom-6 flex w-full justify-center gap-3 px-6">
        <Button
          size="lg"
          variant="outline"
          className="flex-1"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          size="lg"
          variant="default"
          className="flex-1"
          onClick={restart}
        >
          Restart
        </Button>
      </div>
    </div>
  );
}
