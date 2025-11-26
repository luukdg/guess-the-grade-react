import { Slider } from "@/components/ui/slider"
export default function sliderForGrading({
  value,
  handleChange,
  randomHoldIndex,
}) {
  return (
    <Slider
      randomHoldIndex={randomHoldIndex}
      value={[value]}
      min={0}
      max={60}
      step={10}
      className="w-[100%]"
      onValueChange={(valArray) => handleChange(valArray[0])} // pass the number
    />
  )
}
