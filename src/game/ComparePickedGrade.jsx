import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "motion/react";

export default function ComparePickedGrade({ currentGrade, guess }) {
  const gradeMap = {
    "5a+": 0,
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

  let actualValue = gradeMap[currentGrade];
  let userValue = gradeMap[guess.split("/")[0]];

  return (
    <>
      <div className="relative w-full">
        <motion.div
          initial={false}
          animate={{
            left: `calc(${(actualValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute -top-8"
          style={{
            transform: "translateX(-50%)",
            color: "grey",
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            left: `calc(${(userValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
        <div className="border-box flex h-10 w-full overflow-hidden rounded-md">
          <div className="h-5 w-[calc(100%/7)] text-xs opacity-0">5a/5c+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs opacity-0">6a/6a+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs opacity-0">6b/6b+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs">6c/6c+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs">7a/7a+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs opacity-0">7b/7b+</div>
          <div className="h-5 w-[calc(100%/7)] text-xs opacity-0">7c/7c+</div>
        </div>
      </div>
    </>
  );
}
