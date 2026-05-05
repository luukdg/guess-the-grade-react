import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/UI/alert-dialog"
import { GuessStateType } from "@/types/gameContext"

type GameFinishedProps = {
  gameWon?: boolean | null
  navigate: any
  guessState: GuessStateType
}

export function GameFinished({
  gameWon,
  navigate,
  guessState,
}: GameFinishedProps) {
  return (
    <AlertDialog open={gameWon !== null} onOpenChange={() => {}}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {gameWon && guessState.guess.length === 1
              ? "Flash! One guess, nailed it."
              : gameWon
                ? "Send! Took a few tries, but you stuck it."
                : "Ahh, so close! Try again tomorrow."}
          </AlertDialogTitle>
          <AlertDialogDescription>
            See how your guess compares to what everyone else picked today.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => navigate("/resultBoulderOfTheDay")}
            size="lg"
          >
            View results
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
