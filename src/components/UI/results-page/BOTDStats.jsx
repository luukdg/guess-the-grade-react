import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

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

export function BOTDStats({ videoStats }) {
  const rangesToGrades = {
    "48-59": "5a/5c+",
    "60-63": "6a/6a+",
    "64-67": "6b/6b+",
    "68-71": "6c/6c+",
    "72-75": "7a/7a+",
    "76-79": "7b/7b+",
    "80-83": "7c/7c+",
  }

  const guessesPerRange = videoStats

  const mergedData = Object.keys(rangesToGrades).map((range) => ({
    grades: rangesToGrades[range], // X-axis label
    guesses: guessesPerRange[range] || 0, // Y-axis value
  }))

  let actualValue = 4
  let userValue = 2

  const highlightedBars = [
    { index: actualValue, color: "oklch(79.2% 0.209 151.711)" }, // green-400
    { index: userValue, color: "oklch(70.4% 0.191 22.216)" }, // red-400
  ]

  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={mergedData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="grades"
          tickLine={false}
          tickMargin={20}
          axisLine={false}
          fontSize={11}
          interval={0}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="guesses"
          radius={4}
          shape={(props) => {
            // check if this bar is highlighted
            const highlight = highlightedBars.find(
              (h) => h.index === props.index,
            )

            return (
              <Rectangle
                {...props}
                fill="var(--color-guesses)" // always normal fill
                stroke={highlight ? highlight.color : "none"} // only border
                strokeWidth={highlight ? 2 : 0} // thickness of the border
                strokeDasharray={highlight ? 4 : 0} // optional dashed border
                strokeDashoffset={highlight ? 4 : 0} // optional dashed offset
              />
            )
          }}
        />
      </BarChart>
    </ChartContainer>
  )
}
