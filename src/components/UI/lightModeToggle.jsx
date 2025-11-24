import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "../themeProvider"

export function LightModeToggle() {
  const { theme, setTheme } = useTheme()

  const isLight = theme === "light"

  const handleToggle = (checked) => {
    setTheme(checked ? "light" : "dark")
    console.log(checked)
  }
  return (
    <>
      <Label htmlFor="LightMode">Light mode:</Label>
      <Switch id="LightMode" onCheckedChange={handleToggle} checked={isLight} />
    </>
  )
}
