import { Bar, BarChart, XAxis, CartesianGrid, Rectangle } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { gradeMap } from "../../../constants/gradeMap"

const chartConfig = {
  guesses: {
    label: "guesses",
    color: "var(--chart-1)",
  },
}

export function VideoStats({ videos, currentIndex, currentGrade, guess }) {
  // Determine the correct index
  let index = 0
  if (currentIndex === 0) {
    index = currentIndex
  } else {
    index = currentIndex - 1
  }

  // Map ranges to grades
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

  // Highlight actual and user guess bars
  let actualValue = gradeMap[currentGrade]
  let userValue = gradeMap[guess.split("/")[0]]

  const highlightedBars = [
    { index: actualValue, color: "oklch(79.2% 0.209 151.711)" }, // green-400
    { index: userValue, color: "oklch(70.4% 0.191 22.216)" }, // red-400
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grade chart</CardTitle>
        <CardDescription>Distribution of everyone's guesses.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full">
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
      </CardContent>
    </Card>
  )
}
