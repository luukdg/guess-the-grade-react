import { useState, useEffect } from "react";
import Game from "./game";
import Result from "./result";
import { UpdateLives } from "../game/gameWithLives";
import Streak from "../game/scoreStreak";
import GameOver from "../game/gameOver";

function GameOverview() {
  const [lives, setLives] = useState(3);
  const [outcome, setOutcome] = useState("game"); // store score or result if needed
  const [streak, setStreak] = useState(0);
  const [guess, setGuess] = useState(null);
  const [numericGuess, setNumericGuess] = useState(null);

  useEffect(() => {
    if (lives <= 0) {
      setOutcome("gameover");
    }
  }, [lives]);

  const showScoreAndLives = lives > 0;

  return (
    <>
      <div className="align-self flex h-full w-full flex-col items-center pt-10 pr-6 pb-10 pl-6 sm:justify-center">
        {showScoreAndLives && (
          <div className="flex w-10 flex-row items-center justify-center gap-1">
            <p>Score: </p>
            <Streak streak={streak} />
            <p>Lives:</p>
            <UpdateLives lives={lives} setLives={setLives} />
          </div>
        )}

        {outcome === "game" && (
          <Game
            lives={lives}
            setLives={setLives}
            streak={streak}
            setStreak={setStreak}
            finish={(result) => setOutcome(result)}
            guess={guess}
            setGuess={setGuess}
            numericGuess={numericGuess}
            setNumericGuess={setNumericGuess}
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
            restart={() => {
              setOutcome("game");
            }}
          />
        )}

        {outcome === "gameover" && (
          <GameOver
            streak={streak}
            restart={() => {
              setLives(3);
              setStreak(0);
              setGuess(null);
              setOutcome("game");
            }}
          />
        )}
      </div>
    </>
  );
}

export default GameOverview;
