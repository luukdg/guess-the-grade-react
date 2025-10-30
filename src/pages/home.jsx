import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGradeScale } from "../functions/gradeScaleContext";
import { Button } from "@/components/ui/button";
import gradeLogo from "/logo.svg";
import { retrieveStreak } from "@/api/localStorage/streakLocalStorage";
import { HighScore } from "../components/UI/highScoreButton";
import ComboBoxResponsive from "@/components/UI/indoorOrOutdoorButton";

function Home() {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const [open, setOpen] = useState(false);

  const currentStreak = retrieveStreak();

  return (
    <div className="align-self relative flex h-full w-full flex-col items-center justify-center gap-5 px-10">
      <div className="absolute top-4 left-4">
        <HighScore />
      </div>
      <img src={gradeLogo} className="w-60" alt="logo" />
      <div>
        <p className="text-center">Clips, grades, consequences. 3 lives.</p>
        <p className="text-center">
          If it screams <strong>‘v2 in my gym’</strong> aim higher.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p>Video type (beta):</p>
        <ComboBoxResponsive />
      </div>

      <div className="absolute bottom-6 flex w-full justify-center gap-3 px-6">
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => navigate("/game")}
        >
          Start Game
        </Button>
      </div>
      {open && (
        <div className="fixed flex flex-col items-center justify-center gap-4 rounded-2xl bg-black p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={() => setGradeScale((prev) => !prev)}>
            {gradeScale ? "Switch to Font" : "Switch to V-Scale"}
          </button>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Home;
