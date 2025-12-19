import Slider from "@mui/material/Slider"
import { useSettings } from "@/context/settingsContext"

export default function SliderForGrading({
  value,
  handleChange,
  handleSubmit,
}) {
  const { submitOnDrag } = useSettings()
  const test = true

  return (
    <>
      <Slider
        aria-label="Custom marks"
        value={value}
        valueLabelDisplay="off"
        step={10}
        marks
        min={0}
        max={60}
        onChange={handleChange}
        onChangeCommitted={() => {
          if (submitOnDrag) {
            handleSubmit()
          }
        }}
        sx={{
          color: "var(--primary)",
          height: 8,
          "& .MuiSlider-rail": {
            opacity: 0.5,
            backgroundColor: "var(--muted-foreground)",
          },
          "& .MuiSlider-mark": {
            backgroundColor: "var(--secondary-foreground)",
            height: 6,
          },
        }}
      />
    </>
  )
}
