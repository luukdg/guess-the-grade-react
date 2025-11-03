import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { currentGrade } from "../../api/fetchVideoData";
import { useGradeScale } from "../../functions/gradeScaleContext";
import { isGradeCorrect } from "../../functions/isGradeCorrect";
import CheckGrade from "../UI/guessReponse";
import ComparePickedGrade from "../UI/comparePickedGrade";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import GameOverButtons from "../UI/gameOverButtons";
import { saveStreakToLocalStorage } from "../../api/localStorage/streakLocalStorage";

const Result = ({
  guess,
  lives,
  setLives,
  streak,
  setStreak,
  restart,
  nextVideo,
  firebaseId,
  setFirebaseId,
}) => {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const isCorrect = isGradeCorrect(guess);

  useEffect(() => {
    saveStreakToLocalStorage(streak);
  }, [lives, streak]);

  return (
    <div className="align-self relative flex h-full w-full flex-col items-center justify-center">
      {/* Results message */}
      <motion.div
        className="mb-6 flex flex-col gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <CheckGrade
          guess={guess}
          lives={lives}
          setLives={setLives}
          streak={streak}
          setStreak={setStreak}
        />

        <div className="mb-6 text-center text-2xl">
          You guessed{" "}
          <strong className={isCorrect ? "text-green-400" : "text-red-400"}>
            {guess}
          </strong>
          , and the correct grade was{" "}
          <strong className="text-green-400">{currentGrade}</strong>.
        </div>
      </motion.div>

      {/* Comparison bar */}
      <ComparePickedGrade currentGrade={currentGrade} guess={guess} />

      {/* Buttons at the bottom */}
      <div className="absolute bottom-0 flex w-full flex-row gap-4">
        {lives === 0 ? (
          <GameOverButtons restart={restart} />
        ) : (
          <Button
            size="lg"
            variant="default"
            className="w-full"
            onClick={() => nextVideo()}
          >
            Next video
          </Button>
        )}
      </div>
    </div>
  );
};

export default Result;
