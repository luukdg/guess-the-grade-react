import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import GetGif from "@/api/giphy/giphyApi"
import { useSettings } from "@/context/settingsContext"

export function HighScore() {
  const { settings } = useSettings()

  // Show different message with no high score
  if (settings.streak === null || settings.streak === "0") {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" size="sm">
            <Trophy /> 0
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Nothing to show!</AlertDialogTitle>
            <AlertDialogDescription>
              You don&apos;t have a high score yet. Play the game to set your
              first.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" size="sm">
          <Trophy /> {settings.streak}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Your high score: {settings.streak}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {settings.streak} correct answers! Nice one, you deserve a gif for
            that.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <GetGif />
        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
