import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useSettings } from "@/context/settingsContext"

export function VideoSettings() {
  const {
    autoPlay,
    updateAutoPlay,
    mute,
    updateMute,
    loop,
    updateLoop,
    always2x,
    updateAlways2x,
  } = useSettings()
  return (
    <>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="autoplay">Autoplay videos on load:</Label>
        <Switch
          id="autoplay"
          checked={autoPlay}
          onCheckedChange={updateAutoPlay}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="mute">Mute videos by default:</Label>
        <Switch id="mute" checked={mute} onCheckedChange={updateMute} />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="loop">Loop video automatically:</Label>
        <Switch id="loop" checked={loop} onCheckedChange={updateLoop} />
      </div>
      <div className="flex w-full flex-row justify-between">
        <Label htmlFor="speed">Play videos at 2x speed by default:</Label>
        <Switch
          id="speed"
          checked={always2x}
          onCheckedChange={updateAlways2x}
        />
      </div>
    </>
  )
}
