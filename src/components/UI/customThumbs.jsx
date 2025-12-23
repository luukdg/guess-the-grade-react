/* eslint-disable react-hooks/rules-of-hooks */

import { SliderThumb } from "@mui/material/Slider"
import { useMemo } from "react"
import Hold1 from "/holds/hold1.svg"
import Hold2 from "/holds/hold2.svg"
import Hold3 from "/holds/hold3.svg"
import Hold4 from "/holds/hold4.svg"
import Hold5 from "/holds/hold5.svg"
import Hold6 from "/holds/hold6.svg"

const holdIcons = [Hold1, Hold2, Hold3, Hold4, Hold5, Hold6]

export function CustomThumb(props) {
  const { children, ...other } = props

  const randomHold = useMemo(
    () => holdIcons[Math.floor(Math.random() * holdIcons.length)],
    [],
  )

  return (
    <SliderThumb
      {...other}
      sx={{
        width: 32,
        height: 32,
        backgroundColor: "transparent !important",
        border: "none",
        boxShadow: "none !important",
        "&::before": {
          display: "none",
        },
        "&:hover, &.Mui-focusVisible, &.Mui-active": {
          boxShadow: "none !important",
        },
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
        },
      }}
    >
      {children}
      <img src={randomHold} alt="hold" draggable="false" />
    </SliderThumb>
  )
}
