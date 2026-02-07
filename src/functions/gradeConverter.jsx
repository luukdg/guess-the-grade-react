import { Font, French, VScale } from "@openbeta/sandbag"

export function convertToFont(grade) {
  const convertedGrade = Font.getGrade(grade)
  return convertedGrade
}

export function convertToVSale(grade) {
  const convertedGrade = VScale.getGrade(grade)
  return convertedGrade
}

export function convertGradeToNum(grade) {
  if (grade[0] === "V") {
    return VScale.getScore(grade)
  } else {
    return French.getScore(grade)
  }
}

export const convertNumToGrade = (num, gradeScale) => {
  if (gradeScale === "font-scale") {
    return convertToFont(num)
  } else {
    return convertToVSale(num)
  }
}
