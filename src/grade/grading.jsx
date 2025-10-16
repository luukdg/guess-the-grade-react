export const marksOld = [
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

export const marks = [
  { value: 0, label: [48, 59] },
  { value: 10, label: [60, 63] },
  { value: 20, label: [64, 67] },
  { value: 30, label: [68, 71] },
  { value: 40, label: [72, 75] },
  { value: 50, label: [76, 79] },
  { value: 60, label: [80, 83] },
];

export function getGrade(value) {
  const mark = marks.find((m) => m.value === value);
  if (mark) {
    return mark.label;
  } else {
    return value;
  }
}
