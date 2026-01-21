import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"
import { ComboBoxResponsive } from "@/components/UI/settings-page/SettingsPopover"
import { location, gradeScale } from "@/constants/applicationSettings"
import { LightModeToggle } from "@/components/UI/settings-page/lightModeToggle"
import { VideoSettings } from "@/components/UI/settings-page/videoSettings"
import { Separator } from "@radix-ui/react-separator"
import { Switch } from "@/components/ui/switch"
import { useSettings } from "@/context/settingsContext"
import { useNavigate } from "react-router-dom"
import { googleAuth } from "@/api/googleAuth"
import { Button } from "@/components/ui/button"

function SettingsPage() {
  const { settings, updateSetting } = useSettings()
  const navigate = useNavigate()

  return (
    <>
      <div className="border-border flex h-full w-full flex-col overflow-y-auto px-3 pt-3">
        <div className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-bold">
          <h1>Settings</h1>
          <Settings className="text-(--muted-foreground)" />
        </div>
        <Separator className="border-muted mb-4 w-full border-t" />
        <div className="mb-6 flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-base font-bold">Playback:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your playback functions.
            </p>
          </div>
          <VideoSettings />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-base font-bold">Game:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your game preferences.
            </p>
          </div>
          <div className="flex w-full flex-row justify-between">
            <Label htmlFor="gradeScale">Default grade scale (WIP):</Label>
            <ComboBoxResponsive
              id="gradeScale"
              inputArray={gradeScale}
              localStorageType={"gradeScale"}
            />
          </div>
          <div className="flex w-full flex-row justify-between">
            <Label htmlFor="location">Default video type:</Label>
            <ComboBoxResponsive
              id="location"
              inputArray={location}
              localStorageType={"location"}
            />
          </div>
          <div className="flex w-full flex-row justify-between">
            <Label htmlFor="infinite">Disable lives (infinite mode):</Label>
            <Switch
              id="infinite"
              checked={settings.infinite}
              onCheckedChange={(checked) => updateSetting("infinite", checked)}
            />
          </div>
          <div className="flex w-full flex-row justify-between">
            <Label htmlFor="submitOnDrag">Submit on drag:</Label>
            <Switch
              id="submitOnDrag"
              checked={settings.SubmitOnDrag}
              onCheckedChange={(checked) =>
                updateSetting("submitOnDrag", checked)
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-base font-bold">App:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your app preferences.
            </p>
          </div>
          <div className="flex w-full flex-row justify-between pb-5">
            <LightModeToggle />
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Button onClick={googleAuth}>Login with Google (test)</Button>
        </div>

        <div className="mb-3 flex h-full items-end justify-center text-xs font-bold text-(--muted-foreground)">
          <div
            className="cursor-pointer hover:text-(--primary)"
            onClick={() => navigate("/privacy")}
          >
            Privacy policy
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
