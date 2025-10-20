import { useNavigate } from "react-router-dom";
import { currentGrade } from "../api/getVideo";
import { motion } from "motion/react";
import { useGradeScale } from "../grade/contextGrade";
import ComparePickedGrade from "../game/ComparePickedGrade";
import CheckGrade from "../grade/checkGrade";

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

  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center pb-12">
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
          You guessed <strong>{guess}</strong>, and the correct grade was{" "}
          <strong>{currentGrade}</strong>.
        </div>
      </motion.div>

      <ComparePickedGrade currentGrade={currentGrade} guess={guess} />

      <div className="absolute bottom-10 flex w-full flex-row gap-4 px-6">
        <button className="w-1/2" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="w-1/2" onClick={() => restart()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Result;
