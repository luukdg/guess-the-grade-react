import { useState, useEffect } from "react";
import VideoGuess from "@/components/main/videoGuess";
import Result from "@/components/main/result";
import { ClimberIcons } from "@/components/UI/climberIcons";
import Streak from "@/components/UI/scoreStreak";
import { useLocation } from "react-router-dom";

function Game() {
  const [lives, setLives] = useState(3);
  const [outcome, setOutcome] = useState("game"); // store score or result if needed
  const [streak, setStreak] = useState(0);
  const [guess, setGuess] = useState(null);
  const [numericGuess, setNumericGuess] = useState([68, 71]);
  const [firebaseId, setFirebaseId] = useState(null);

  const location = useLocation();
  const { selectedStatus } = location.state || {};

  const showScoreAndLives = lives > 0;

  return (
    <>
      <div className="justify-content flex h-full flex-col items-center px-6 py-6">
        <div className="flex h-1/12 flex-row items-center justify-center gap-2 pb-5">
          <p>Score: </p>
          <Streak streak={streak} />
          {showScoreAndLives && (
            <>
              <p>Lives:</p>
              <ClimberIcons lives={lives} setLives={setLives} />
            </>
          )}
        </div>

        {outcome === "game" && (
          <VideoGuess
            lives={lives}
            setLives={setLives}
            streak={streak}
            setStreak={setStreak}
            finish={(result) => setOutcome(result)}
            guess={guess}
            setGuess={setGuess}
            numericGuess={numericGuess}
            setNumericGuess={setNumericGuess}
            firebaseId={firebaseId}
            setFirebaseId={setFirebaseId}
            outcome={outcome}
            setOutcome={setOutcome}
            selectedStatus={selectedStatus}
          />
        )}
        {outcome === "result" && (
          <Result
            guess={guess}
            setGuess={setGuess}
            lives={lives}
            setLives={setLives}
            streak={streak}
            setStreak={setStreak}
            result={outcome}
            nextVideo={() => {
              setOutcome("game");
              setNumericGuess([68, 71]);
            }}
            restart={() => {
              setNumericGuess([68, 71]);
              setLives(3);
              setStreak(0);
              setGuess(null);
              setOutcome("game");
            }}
            firebaseId={firebaseId}
            setFirebaseId={setFirebaseId}
          />
        )}
      </div>
    </>
  );
}

export default Game;
