import { ChevronDown } from "lucide-react"
import { isGradeCorrect } from "../../functions/isGradeCorrect"
import { motion } from "motion/react"
import { gradeMap } from "../../constants/gradeMap"

export default function ComparePickedGrade({ currentGrade, guess }) {
  const isCorrect = isGradeCorrect(guess)

  let actualValue = gradeMap[currentGrade]
  let userValue = gradeMap[guess.split("/")[0]]
  let startingValue = -1

  return (
    <>
      <div className="font-archivo-black relative w-full pb-5">
        <motion.div
          initial={{ left: `calc(${(startingValue + 0.5) * (100 / 7)}%)` }}
          animate={{
            left: `calc(${(actualValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute -top-8 text-green-400"
          style={{
            transform: "translateX(-50%)",
          }}
        >
          <ChevronDown fontSize="large" />
        </motion.div>
        <motion.div
          initial={{ left: `calc(${(startingValue + 0.5) * (100 / 7)}%)` }}
          animate={{
            left: `calc(${(userValue + 0.5) * (100 / 7)}%)`,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute -top-8"
          style={{
            transform: "translateX(-50%)",
          }}
        >
          <ChevronDown
            fontSize="large"
            className={isCorrect ? "text-green-400" : "text-red-400"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          animate={{ opacity: 100 }}
          className="border-box flex h-12 w-full flex-row overflow-hidden rounded-md text-sm/3.5 font-bold"
        >
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/10 p-1 text-center">
            <p
              className={
                actualValue === 0 || userValue === 0
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              5a 5c+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/20 p-1 text-center">
            <p
              className={
                actualValue === 1 || userValue === 1
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              6a 6a+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/30 p-1 text-center">
            <p
              className={
                actualValue === 2 || userValue === 2
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              6b 6b+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/40 p-1 text-center">
            <p
              className={
                actualValue === 3 || userValue === 3
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              6c 6c+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/50 p-1 text-center">
            <p
              className={
                actualValue === 4 || userValue === 4
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              7a 7a+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/60 p-1 text-center">
            <p
              className={
                actualValue === 5 || userValue === 5
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              7b 7b+
            </p>
          </div>
          <div className="flex w-[calc(100%/7)] items-center justify-center bg-gray-200/70 p-1 text-center">
            <p
              className={
                actualValue === 6 || userValue === 6
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              7c 7c+
            </p>
          </div>
        </motion.div>
      </div>
    </>
  )
}
