import Slider from "@mui/material/Slider"
import { useSettings } from "@/context/settingsContext"
import { CustomThumb } from "../customThumbs"

export default function SliderForGrading({
  value,
  handleChange,
  handleSubmit,
}) {
  const { settings } = useSettings()

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
          if (settings.submitOnDrag) {
            handleSubmit()
          }
        }}
        slots={{
          thumb: CustomThumb,
        }}
        sx={{
          color: "var(--primary)",
          height: 8,
          "& .MuiSlider-rail": {
            opacity: 0.5,
            backgroundColor: "var(--muted-foreground)",
          },
          "& .MuiSlider-mark": {
            backgroundColor: "var(--background)",
            height: 10,
            width: 3,
          },
        }}
      />
    </>
  )
}
