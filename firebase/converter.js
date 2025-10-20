import { French, VScale } from "@openbeta/sandbag";

// Converts a single grade like 7a, but also 7a/7a+
export default function convert(grade) {
  let score = null;

  const str = grade;
  const firstLetter = str.charAt(0);

  if (firstLetter === "V") {
    score = VScale.getScore(grade);
  } else {
    score = French.getScore(grade);
  }
  return score;
}
