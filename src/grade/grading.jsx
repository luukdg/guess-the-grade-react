export const marks = [
  { value: 0, label: "4a" },
  { value: 10, label: "4b" },
  { value: 20, label: "4c" },
  { value: 30, label: "5a" },
  { value: 40, label: "5b" },
  { value: 50, label: "5c" },
  { value: 60, label: "6a" },
  { value: 70, label: "6a+" },
  { value: 80, label: "6b" },
  { value: 90, label: "6b+" },
  { value: 100, label: "6c" },
  { value: 110, label: "6c+" },
  { value: 120, label: "7a" },
  { value: 130, label: "7a+" },
  { value: 140, label: "7b" },
  { value: 150, label: "7b+" },
  { value: 160, label: "7c" },
  { value: 170, label: "7c+" },
  { value: 180, label: "8a" },
];

export function getGrade(value) {
  const mark = marks.find((m) => m.value === value);
  return mark ? mark.label : value;
}
