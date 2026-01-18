import { Bar, BarChart, XAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  guesses: {
    label: "guesses",
    color: "var(--chart-1)",
  },
}

export function VideoStats({ videos, currentIndex }) {
  let index = 0
  if (currentIndex === 0) {
    index = currentIndex
  } else {
    index = currentIndex - 1
  }

  const rangesToGrades = {
    "48-59": "5a/5c+",
    "60-63": "6a/6a+",
    "64-67": "6b/6b+",
    "68-71": "6c/6c+",
    "72-75": "7a/7a+",
    "76-79": "7b/7b+",
    "80-83": "7c/7c+",
  }

  // Guesses per range
  const guessesPerRange = videos[index].guesses

  // Merge into chart-friendly array
  const mergedData = Object.keys(rangesToGrades).map((range) => ({
    grades: rangesToGrades[range], // X-axis label
    guesses: guessesPerRange[range] || 0, // Y-axis value
  }))

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart accessibilityLayer data={mergedData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="grades"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="guesses" fill="var(--color-guesses)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
