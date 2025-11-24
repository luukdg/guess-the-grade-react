import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useSettings } from "@/functions/settingsContext"

export function ComboBoxResponsive({ inputArray, localStorageType }) {
  const [open, setOpen] = useState(false)
  const { videoType, setVideoType, gradeScale, setGradeScale } = useSettings()
  const statuses = inputArray
  let storedValue = null
  let storedFunction = null
  let localStorageString = ""

  if (localStorageType === "gradeScale") {
    storedValue = gradeScale
    storedFunction = setGradeScale
    localStorageString = "gradeScale"
  } else {
    storedValue = videoType
    storedFunction = setVideoType
    localStorageString = "VideoType"
  }

  function saveTypeToLocalStorage(storedValue) {
    storedFunction(storedValue)
    localStorage.setItem(localStorageString, JSON.stringify(storedValue))
    console.log(
      localStorageString,
      "saved to localStorage, value:",
      storedValue,
    )
  }

  return (
    <div className="">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[100px] justify-center">
            {!storedValue} {storedValue.label}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="end">
          <StatusList
            setOpen={setOpen}
            saveTypeToLocalStorage={saveTypeToLocalStorage}
            statuses={statuses}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function StatusList({ setOpen, saveTypeToLocalStorage, statuses }) {
  return (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                saveTypeToLocalStorage(
                  statuses.find((s) => s.value === value) || null,
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
