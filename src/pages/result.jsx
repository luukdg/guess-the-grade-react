import { useNavigate } from "react-router-dom";
import { checkGrade, userGrade } from "../grade/checkGrade";
import { currentGrade } from "../api/getVideo";
import { motion } from "motion/react";
import convert from "../grade/converter";
import { useGradeScale } from "../grade/contextGrade";

const Result = () => {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();

  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center pt-10 pr-6 pb-10 pl-6">
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center text-3xl font-bold">
          {checkGrade(userGrade)}
        </div>
        <div className="text-center text-2xl">
          You guessed <strong>{gradeScale ? userGrade : userGrade}</strong>, and
          the correct grade was <strong>{currentGrade}</strong>.
        </div>
      </motion.div>

      <div className="absolute bottom-10 flex w-full flex-row gap-4 px-6">
        <button className="w-1/2" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="w-1/2" onClick={() => navigate("/game")}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Result;
