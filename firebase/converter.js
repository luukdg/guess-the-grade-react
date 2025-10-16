import { French } from "@openbeta/sandbag";

// Converts a single grade like 7a, but also 7a/7a+
export default function convert(grade) {
  const score = French.getScore(grade);
  return score;
}
