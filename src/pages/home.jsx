import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import gradeLogo from "/logo.svg"
import gradeLogoLight from "/logo-light.svg"
import ChristmasHat from "/hat.svg"
import { HighScore } from "../components/UI/home-page/highScoreButton"
import { useTheme } from "@/context/themeProvider"
import Snowfall from "react-snowfall"
import { RandomTip } from "@/components/UI/randomTip"
import { Snowflake } from "lucide-react"
import { useState } from "react"

function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const [activateSnow, setActivateSnow] = useState(false)

  return (
    <div className="align-self relative flex h-full w-full flex-1 flex-col items-center justify-center px-3 pt-3">
      <div className="absolute inset-0 h-full w-full">
        {activateSnow && <Snowfall />}
      </div>
      <div className="absolute top-3 left-3 flex flex-row gap-2">
        <HighScore />
        <Button
          size="sm"
          variant="default"
          onClick={() => setActivateSnow((prev) => !prev)}
        >
          <Snowflake />
        </Button>
      </div>
      <div className="relative flex w-3/4 flex-col items-center gap-4 md:w-2/4 lg:w-1/4">
        {theme === "dark" && (
          <>
            <div className="relative mt-8 w-4/5">
              <img src={gradeLogo} className="w-full" alt="logo" />
              <img
                src={ChristmasHat}
                className="absolute -top-4 -left-6 w-16 -rotate-12"
                alt="logo"
              />
            </div>
          </>
        )}
        {theme === "light" && (
          <>
            <div className="relative mt-8 w-4/5">
              <img src={gradeLogoLight} className="w-full" alt="logo" />
              <img
                src={ChristmasHat}
                className="absolute -top-4 -left-6 w-16 -rotate-12"
                alt="logo"
              />
            </div>
          </>
        )}
        <Button
          size="default"
          variant="default"
          className="w-full"
          onClick={() => navigate("/game")}
        >
          START GAME
        </Button>

        <div className="border-border w-full rounded-md border-1 p-4">
          <ul className="pl-2 text-center text-sm">
            <RandomTip />
          </ul>
          <div className="flex w-full items-center justify-center"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
