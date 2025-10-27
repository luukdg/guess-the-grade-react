import { useNavigate } from "react-router-dom";
import { currentGrade } from "../../api/fetchVideoData";
import { useGradeScale } from "../../functions/gradeScaleContext";
import { isGradeCorrect } from "../../functions/isGradeCorrect";
import CheckGrade from "../UI/guessReponse";
import ComparePickedGrade from "../UI/comparePickedGrade";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const Result = ({
  guess,
  lives,
  setLives,
  streak,
  setStreak,
  restart,
  firebaseId,
  setFirebaseId,
}) => {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const isCorrect = isGradeCorrect(guess);

  return (
    <div className="align-self flex h-11/12 w-full flex-col items-center justify-center">
      <motion.div
        className="mb-6 flex flex-col gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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

      <ComparePickedGrade currentGrade={currentGrade} guess={guess} />

      <div className="absolute bottom-6 flex w-full flex-row gap-4 px-6">
        <Button
          size="lg"
          variant="default"
          className="w-full"
          onClick={() => restart()}
        >
          Next video
        </Button>
      </div>
    </div>
  );
};

export default Result;
