import { useTheme } from "@/context/themeProvider"

import ClimberIconLight from "/climber-light.svg"
import climberIcon from "/climber.svg"

// Updates the lives inside the DOM
export function ClimberIcons({ lives }) {
  const { theme } = useTheme()
  const icons = []

  for (let i = 0; i < lives; i++) {
    icons.push(
      <img
        className="w-6"
        key={i}
        src={theme === "dark" ? climberIcon : ClimberIconLight}
        alt=""
      />,
    )
  }

  return <>{icons}</>
}
