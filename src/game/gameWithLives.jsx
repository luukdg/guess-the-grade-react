import climberIcon from "/climber.svg";

// Updates the lives inside the DOM
export function UpdateLives({ lives, setLives }) {
  const icons = [];

  for (let i = 0; i < lives; i++) {
    icons.push(<img key={i} src={climberIcon} alt="" />);
  }

  return <>{icons}</>;
}
