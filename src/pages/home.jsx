import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGradeScale } from "../functions/gradeScaleContext";
import { Button } from "@/components/ui/button";
import gradeLogo from "/logo.svg";
import { HighScore } from "../components/UI/highScoreButton";
import {
  ComboBoxResponsive,
  statuses,
} from "@/components/UI/indoorOrOutdoorButton";

function Home({ videoType, setVideoType }) {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const [open, setOpen] = useState(false);

  return (
    <div className="align-self relative flex h-full w-full flex-1 flex-col items-center justify-center gap-4">
      <div className="absolute top-0 left-0">
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
        <ComboBoxResponsive videoType={videoType} setVideoType={setVideoType} />
      </div>

      <div className="absolute bottom-0 w-full">
        <Button
          size="lg"
          variant="default"
          className="w-full"
          onClick={() => navigate("/game")}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
}

export default Home;
