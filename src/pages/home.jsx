import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import gradeLogo from "/logo.svg"
import gradeLogoLight from "/logo-light.svg"
import { HighScore } from "../components/UI/highScoreButton"
import { useTheme } from "@/components/themeProvider"

function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()

  return (
    <div className="align-self relative flex h-full w-full flex-1 flex-col items-center justify-center gap-6">
      <div className="absolute top-0 left-0">
        <HighScore />
      </div>
      {theme === "dark" && (
        <>
          <img src={gradeLogo} className="w-60" alt="logo" />
        </>
      )}
      {theme === "light" && (
        <>
          <img src={gradeLogoLight} className="w-60" alt="logo" />
        </>
      )}
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
  )
}

export default Home
