import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"
import { ComboBoxResponsive } from "@/components/UI/SettingsPopover"
import { location, gradeScale } from "@/constants/applicationSettings"
import { LightModeToggle } from "@/components/UI/lightModeToggle"
import { VideoSettings } from "@/components/UI/videoSettings"

function SettingsPage() {
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-bold">
          <h1>Settings</h1>
          <Settings className="text-(--muted-foreground)" />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-xl font-bold">Playback:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your playback functions.
            </p>
          </div>
          <VideoSettings />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-xl font-bold">Bouldering:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your bouldering preferences.
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
            <Label htmlFor="location">Default location preference:</Label>
            <ComboBoxResponsive
              id="location"
              inputArray={location}
              localStorageType={"location"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-3 flex-col">
            <h1 className="text-xl font-bold">App:</h1>
            <p className="text-sm text-(--muted-foreground)">
              Change your app preferences.
            </p>
          </div>
          <div className="flex w-full flex-row justify-between">
            <LightModeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
