import { getUserGuess } from "./getUserGuess";
import { checkGradeBoolean } from "../grade/checkGradeBoolean";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

export default function GetAverageGuess({ firebaseId, guess }) {
  const averageGuess = getUserGuess(firebaseId);

  console.log("guess:", guess);
  console.log(averageGuess);

  if (!averageGuess) return <div>Loading...</div>;

  const gradeMap = {
    "48-59": "5a/5c+",
    "60-63": "6a/6a+",
    "64-67": "6b/6b+",
    "68-71": "6c/6c+",
    "72-75": "7a/7a+",
    "76-79": "7b/7b+",
    "80-83": "7c/7c+",
  };

  const data = Object.entries(averageGuess ?? {})
    .sort(([rangeA], [rangeB]) => {
      // extract start numbers from ranges
      const startA = parseInt(rangeA.split("-")[0], 10);
      const startB = parseInt(rangeB.split("-")[0], 10);
      return startA - startB; // ascending order
    })
    .map(([range, value]) => ({
      name: gradeMap[range] || range,
      guesses: value ?? 0,
    }));

  const gameOutcome = checkGradeBoolean(guess);

  let color;

  if (gameOutcome) {
    color = "#00bb28ff";
  } else {
    color = "#ff0000ff";
  }

  return (
    <>
      <div className="flex h-[240px] w-full flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" width={80} />
            <Tooltip />
            <Bar dataKey="guesses" radius={[8, 8, 8, 8]}>
              <LabelList dataKey="guesses" position="right" />
              {data.map((entry, index) => (
                <Cell
                  key={entry.range}
                  fill={entry.name === guess ? color : "#1976d2"} // highlight picked bar
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
