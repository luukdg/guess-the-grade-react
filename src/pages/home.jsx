import { useNavigate } from "react-router-dom";
import gradeLogo from "/logo.svg";
import { useGradeScale } from "../grade/contextGrade";

function Home() {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center gap-5">
      <img src={gradeLogo} className="w-75" alt="logo" />
      <button
        className="absolute bottom-10 w-35"
        onClick={() => navigate("/game")}
      >
        Start Game
      </button>
      <button
        onClick={() => setGradeScale((prev) => !prev)}
        className="absolute bottom-25"
      >
        Change scale
      </button>
    </div>
  );
}

export default Home;
