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
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/loginContext"

export function LogOutAlert() {
  const { loginWithGoogle, logout, user } = useAuth()

  return (
    <>
      {user ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="lg" className="flex-1">
              Log out
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to log out?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Your data will remain saved and you can log back in anytime.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={logout}>Log out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Button size="lg" className="flex-1" onClick={loginWithGoogle}>
          Login with Google
        </Button>
      )}
    </>
  )
}
