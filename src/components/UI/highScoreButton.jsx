import { Button } from "@/components/ui/button"
import { retrieveStreak } from "@/api/localStorage/streakLocalStorage"
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

export function HighScore() {
  const currentStreak = retrieveStreak()

  // Show different message with no high score
  if (currentStreak === null || currentStreak === "0") {
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
              You don't have a high score yet. Play the game to set your first.
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
          <Trophy /> {currentStreak}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your high score: {currentStreak}</AlertDialogTitle>
          <AlertDialogDescription>
            {currentStreak} correct answers! Nice one, you deserve a gif for
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
