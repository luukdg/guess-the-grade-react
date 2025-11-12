import { Font } from "@openbeta/sandbag";

const grade = [
  "5a",
  "5a+",
  "5b",
  "5b+",
  "5c",
  "5c+",
  "6a",
  "6a+",
  "6b",
  "6b+",
  "6c",
  "6c+",
  "7a",
  "7a+",
  "7b",
  "7b+",
  "7c",
  "7c+",
  "8a",
];

// Converts a single grade like 7a, but also 7a/7a+
function convertGradeToScore(grade) {
  for (let i = 0; i < grade.length; i++) {
    console.log(Font.getScore(grade[i]));
  }
}

convertGradeToScore(grade);
