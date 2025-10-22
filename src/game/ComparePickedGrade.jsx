import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "motion/react";

export default function ComparePickedGrade({ currentGrade, guess }) {
  const gradeMap = {
    "5a": 0,
    "5a+": 0,
    "5b": 0,
    "5b+": 0,
    "5c": 0,
    "5c+": 0,
    "6a": 1,
    "6a+": 1,
    "6b": 2,
    "6b+": 2,
    "6c": 3,
    "6c+": 3,
    "7a": 4,
    "7a+": 4,
    "7b": 5,
    "7b+": 5,
    "7c": 6,
    "7c+": 6,
  };

  const levels = [
    "5a/5c+",
    "6a/6a+",
    "6b/6b+",
    "6c/6c+",
    "7a/7a+",
    "7b/7b+",
    "7c/7c+",
  ];

  let actualValue = gradeMap[currentGrade];
  let userValue = gradeMap[guess.split("/")[0]];
  let startingValue = 0;

  return (
    <>
      <div className="relative w-full">
        <motion.div
          initial={{ left: `calc(${(startingValue + 0.5) * (100 / 7)}%)` }}
          animate={{
            left: `calc(${(actualValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="absolute -top-8"
          style={{
            transform: "translateX(-50%)",
            color: "grey",
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </motion.div>
        <motion.div
          initial={{ left: `calc(${(startingValue + 0.5) * (100 / 7)}%)` }}
          animate={{
            left: `calc(${(userValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="absolute -top-8"
          style={{
            transform: "translateX(-50%)",
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </motion.div>
        <div className="border-box flex h-2 w-full overflow-hidden rounded-md bg-white">
          <div className="h-5 w-[calc(100%/7)] bg-[#D9D9D9]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#3A7BE0]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#E63946]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#F77F00]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#00C853]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#FF66CC]"></div>
          <div className="h-5 w-[calc(100%/7)] bg-[#000000]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 100 }}
          className="mt-2 flex h-10 w-full overflow-hidden rounded-md"
        >
          {levels.map((label, i) => (
            <div
              key={label}
              className={`h-5 w-[calc(100%/7)] text-xs ${
                i === actualValue || i === userValue
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
