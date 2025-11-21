import climberIcon from "/climber.svg"

// Updates the lives inside the DOM
export function ClimberIcons({ lives }) {
  const icons = []

  for (let i = 0; i < lives; i++) {
    icons.push(<img className="w-10" key={i} src={climberIcon} alt="" />)
  }

  return <>{icons}</>
}
