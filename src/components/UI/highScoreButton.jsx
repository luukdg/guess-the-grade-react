import { Button } from "@/components/ui/button";
import { retrieveStreak } from "@/api/localStorage/streakLocalStorage";
import { Trophy } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GetGif from "@/api/giphy/giphyApi";

export function HighScore() {
  const currentStreak = retrieveStreak();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" size="sm">
          <Trophy /> {currentStreak}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>High score: {currentStreak}</AlertDialogTitle>
          <AlertDialogDescription>
            {currentStreak} correct answers! Nice one, you deserve a gif.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <GetGif />
        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
