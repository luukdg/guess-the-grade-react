import {
  convertGrade,
  GradeScales,
  Font,
  VScale,
  French,
} from "@openbeta/sandbag";

// Converts a single grade like 7a, but also 7a/7a+
export default function convert(grade) {
  const removeSpace = grade.replace(/\s+/g, "");

  const fontInVScale = convertGrade(
    removeSpace,
    GradeScales.FONT,
    GradeScales.VSCALE,
  );

  return fontInVScale;
}

export function convertToFont(grade) {
  const convertedGrade = Font.getGrade(grade);

  return convertedGrade;
}

export function convertToVSale(grade) {
  const convertedGrade = VScale.getGrade(grade);

  return convertedGrade;
}

export function convertToNumericGrade(grade) {
  const score = French.getScore(grade);

  return score;
}
