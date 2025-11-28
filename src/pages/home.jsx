import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import gradeLogo from "/logo.svg"
import gradeLogoLight from "/logo-light.svg"
import { HighScore } from "../components/UI/highScoreButton"
import { useTheme } from "@/components/themeProvider"
import { Separator } from "@radix-ui/react-separator"

function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()

  const handleClick = () => {
    window.location.href =
      "https://github.com/luukdg/guess-the-grade-react/issues/new"
  }

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
      <div className="border-muted mb-4 w-3/4 rounded-md border-2 border-dotted p-4">
        <h2 className="text-center font-bold">Latest features:</h2>
        <Separator className="border-muted my-4 w-full border-t" />
        <ul className="list-disc pl-5 text-sm text-(--muted-foreground)">
          <li>Added a playback feature after guessing the grade.</li>
          <li>Added the option to hide video controls.</li>
          <li>
            Added the ability to switch between dark and light mode in settings.
          </li>
        </ul>
        <div className="mt-2 flex w-full items-center justify-center">
          <Button onClick={handleClick} variant="link">
            Request a feature
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Button
          size="lg"
          variant="default"
          className="w-full"
          onClick={() => navigate("/game")}
        >
          Start a Game
        </Button>
      </div>
    </div>
  )
}

export default Home
