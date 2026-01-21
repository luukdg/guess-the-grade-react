import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import gradeLogo from "/logo.svg"
import gradeLogoLight from "/logo-light.svg"
import { HighScore } from "../components/UI/home-page/highScoreButton"
import { useTheme } from "@/context/themeProvider"
import { RandomTip } from "@/components/UI/randomTip"
import { useSettings } from "@/context/settingsContext"

function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const { user } = useSettings()

  return (
    <div className="align-sel relative flex h-full w-full flex-1 flex-col items-center px-3 pt-3">
      <div className="flex w-full flex-row justify-between gap-2">
        <HighScore />
        <div>
          <img
            className="border-primary h-10 w-10 rounded-full border-2 object-cover"
            src={user?.photoURL || "/default-profile.avif"}
            alt={user?.displayName || "Default Profile"}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="relative flex h-full w-3/4 flex-col items-center justify-center gap-4 md:w-2/4 lg:w-1/4">
        {theme === "dark" && (
          <>
            <div className="relative mt-8 w-4/5">
              <img src={gradeLogo} className="w-full" alt="logo" />
            </div>
          </>
        )}
        {theme === "light" && (
          <>
            <div className="relative mt-8 w-4/5">
              <img src={gradeLogoLight} className="w-full" alt="logo" />
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
