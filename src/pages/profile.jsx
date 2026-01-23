import { Separator } from "@radix-ui/react-separator"
import { useNavigate } from "react-router-dom"
import { User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/loginContext"
import { useEffect } from "react"
import { useSettings } from "@/context/settingsContext"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Profile() {
  const navigate = useNavigate()
  const { user, settings } = useSettings()
  const { loginWithGoogle, logout } = useAuth()

  useEffect(() => {
    console.log("Profile page: ", user)
  }, [])

  return (
    <div className="border-border flex h-full w-full flex-col overflow-y-auto px-3 pt-3">
      <div className="relative mb-5 flex w-full items-center justify-center gap-2 text-xl font-bold">
        <div className="absolute top-0 left-0">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
        </div>
        <h1>Profile</h1>
        <User />
      </div>
      <Separator className="border-muted mb-4 w-full border-t" />
      <div className="h-full w-full">
        <div className="mb-5 flex flex-row items-center justify-between">
          <div>
            <h1 className="text-base font-bold">
              Welcome {user ? user.displayName.split(" ")[0] : ""}
            </h1>
            <p className="text-sm text-(--muted-foreground)">
              Here is your profile information.
            </p>
          </div>
          <img
            className="border-primary h-20 w-20 rounded-full border-2 object-cover"
            src={user?.photoURL || "/default-profile.avif"}
            alt={user?.displayName || "Default Profile"}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Amount of games played:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.totalGames}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Correct guesses:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.correctGuesses}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Accuracy:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.accuracy}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Best streak:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.streak}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Average score:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.averageScore}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Playtime:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.playTime}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Separator className="border-muted my-4 w-full border-t" />
        <div className="mb-2 flex w-full flex-row gap-2">
          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            className="flex-1"
          >
            Settings
          </Button>
          {user ? (
            <Button className="flex-1" onClick={logout}>
              Log out
            </Button>
          ) : (
            <Button className="flex-1" onClick={loginWithGoogle}>
              Login with Google
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
