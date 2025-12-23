import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useSettings } from "@/context/settingsContext"

export function FirstTimeMessage() {
  const { firstTime, updateFirstTime } = useSettings()

  return (
    <div className="absolute inset-0 h-full w-full">
      <AlertDialog open={firstTime} onOpenChange={updateFirstTime}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Welcome!</AlertDialogTitle>
            <AlertDialogDescription>
              You have 3 lives. Watch boulder videos and guess correctly to earn
              streaks. A wrong guess costs a life. Good luck! 🧗‍♂️
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => updateFirstTime(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
