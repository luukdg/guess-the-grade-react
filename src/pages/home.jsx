import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import gradeLogo from "/logo.svg"
import gradeLogoLight from "/logo-light.svg"
import ChristmasHat from "/hat.svg"
import { HighScore } from "../components/UI/home-page/highScoreButton"
import { useTheme } from "@/context/themeProvider"
import Snowfall from "react-snowfall"
import { RandomTip } from "@/components/UI/randomTip"

function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()

  return (
    <div className="align-self relative flex h-full w-full flex-1 flex-col items-center justify-center gap-6">
      <div className="absolute inset-0 h-full w-full">
        <Snowfall />
      </div>
      <div className="absolute top-0 left-0">
        <HighScore />
      </div>
      <div className="relative flex w-3/4 flex-col items-center gap-6 md:w-2/4 lg:w-1/4">
        {theme === "dark" && (
          <>
            <div className="relative">
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
            <div className="relative">
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
          size="xl"
          variant="destructive"
          className="w-full text-base font-bold"
          onClick={() => navigate("/game")}
        >
          START GAME
        </Button>

        <div className="border-muted mb-4 w-full rounded-md border-2 border-dotted p-4">
          <ul className="pl-2 text-sm">
            <RandomTip />
          </ul>
          <div className="mt-2 flex w-full items-center justify-center"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
