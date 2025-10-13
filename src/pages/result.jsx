import { useNavigate } from "react-router-dom";
import { getGrade } from "../grade/grading";
import { checkGrade, userGrade } from "../grade/checkGrade";
import { currentGrade } from "../api/getVideo";

const Result = () => {
  const navigate = useNavigate();
  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center gap-2 pt-10 pr-6 pb-10 pl-6">
      <div className="text-4xl font-bold">{checkGrade(userGrade)}</div>
      <div className="text-center text-2xl">
        You guessed <strong>{userGrade}</strong>, and the correct grade was{" "}
        <strong>{currentGrade}</strong>.
      </div>

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
