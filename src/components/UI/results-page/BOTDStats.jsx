import { Bar, BarChart, XAxis } from "recharts"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  guesses: {
    label: "guesses",
    color: "var(--chart-1)",
  },
}

export function BOTDStats(guesses) {
  const guessesPerRange = guesses

  const rangesToGrades = {
    "48-59": "5a/5c+",
    "60-63": "6a/6a+",
    "64-67": "6b/6b+",
    "68-71": "6c/6c+",
    "72-75": "7a/7a+",
    "76-79": "7b/7b+",
    "80-83": "7c/7c+",
  }

  const mergedData = Object.keys(rangesToGrades).map((range) => ({
    grades: rangesToGrades[range], // X-axis label
    guesses: guessesPerRange.guesses[range] || 0, // Y-axis value
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>Everyone&apos;s first guesses</CardDescription>
      </CardHeader>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={mergedData}>
          <XAxis
            dataKey="grades"
            tickLine={false}
            tickMargin={20}
            axisLine={false}
            fontSize={11}
            interval={0}
          />
          <Bar dataKey="guesses" label radius={4} fill="var(--color-guesses)" />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
