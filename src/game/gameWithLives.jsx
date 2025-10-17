import climberIcon from "/climber.svg";

export let lives = 3;

// Updates the lives inside the DOM
export function UpdateLives() {
  const icons = [];

  for (let i = 0; i < lives; i++) {
    icons.push(<img key={i} src={climberIcon} alt="" />);
  }

  return <>{icons}</>;
}

// decrements lives

let lastOutcome;

export function checkLives(outcome) {
  if (!outcome && outcome !== lastOutcome) {
    lives--;
  }
  lastOutcome = outcome;
  return lives;
}
