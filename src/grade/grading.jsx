import convert from "./converter";

export const marks = [
  { value: 0, label: "4a / 4c+" },
  { value: 10, label: "5a / 5c+" },
  { value: 20, label: "6a / 6a+" },
  { value: 30, label: "6b / 6b+" },
  { value: 40, label: "6c / 6c+" },
  { value: 50, label: "7a / 7a+" },
  { value: 60, label: "7b / 7b+" },
  { value: 70, label: "7c / 7c+" },
  { value: 80, label: "8a" },
];

export function getGrade(value) {
  const mark = marks.find((m) => m.value === value);
  if (mark) {
    return mark.label;
  } else {
    return value;
  }
}

export function getVGrade(value) {
  const mark = marks.find((m) => m.value === value);
  if (mark) {
    const markLabel = mark.label.replace(/\s+/g, ""); // Removes spaces within 6a / 6a+ -> 6a/6a+
    const convertedGrade = convert(markLabel); // Uses the convert function
    return convertedGrade;
  } else {
    return value;
  }
}
