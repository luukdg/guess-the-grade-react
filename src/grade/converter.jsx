import { convertGrade, GradeScales } from "@openbeta/sandbag";

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
