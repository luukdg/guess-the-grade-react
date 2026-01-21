import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useSettings } from "@/context/settingsContext"

export function VideoSettings() {
  const { settings, updateSetting } = useSettings()
  return (
    <>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="autoplay">Autoplay videos on load:</Label>
        <Switch
          id="autoplay"
          checked={settings.autoPlay}
          onCheckedChange={(value) => updateSetting("autoPlay", value)}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="mute">Mute videos by default:</Label>
        <Switch
          id="mute"
          checked={settings.mute}
          onCheckedChange={(value) => updateSetting("mute", value)}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="loop">Loop video automatically:</Label>
        <Switch
          id="loop"
          checked={settings.loop}
          onCheckedChange={(value) => updateSetting("loop", value)}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="speed">Play videos at 2x speed by default:</Label>
        <Switch
          id="speed"
          checked={settings.always2x}
          onCheckedChange={(value) => updateSetting("always2x", value)}
        />
      </div>
    </>
  )
}
