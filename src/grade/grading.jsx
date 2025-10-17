export const marks = [
  { value: 0, label: [48, 59] }, // "5a / 5c+"
  { value: 10, label: [60, 63] }, // "6a / 6a+"
  { value: 20, label: [64, 67] }, // "6b / 6b+"
  { value: 30, label: [68, 71] }, // "6c / 6c+"
  { value: 40, label: [72, 75] }, // "7a / 7a+"
  { value: 50, label: [76, 79] }, // "7b / 7b+"
  { value: 60, label: [80, 83] }, // "7c / 7c+"
];

export function getGrade(value) {
  const mark = marks.find((m) => m.value === value);
  if (mark) {
    return mark.label;
  } else {
    return value;
  }
}
