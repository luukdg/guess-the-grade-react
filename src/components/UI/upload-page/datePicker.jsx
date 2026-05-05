"use client"

import { CalendarIcon } from "lucide-react"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date) {
  if (!date) return ""

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function formatDateForFirestore(date) {
  if (!date) return null

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}` // YYYY-MM-DD (local, safe)
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}

export function DatePickerInput({ onDateChange }) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState(date)
  const [value, setValue] = useState("")

  function handleSelect(selectedDate) {
    setDate(selectedDate)
    setMonth(selectedDate)
    setValue(formatDate(selectedDate))
    setOpen(false)

    const firestoreDate = formatDateForFirestore(selectedDate)
    onDateChange?.(firestoreDate)
  }

  return (
    <Field className="w-full">
      <InputGroup>
        <InputGroupInput
          id="date-required"
          value={value}
          placeholder="Fill in a date..."
          onChange={(e) => {
            const parsedDate = new Date(e.target.value)
            setValue(e.target.value)

            if (isValidDate(parsedDate)) {
              handleSelect(parsedDate)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={handleSelect}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
