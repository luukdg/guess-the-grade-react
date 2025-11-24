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
  const { videoType, updateVideoType, gradeScale, updateGradeScale } =
    useSettings()
  const statuses = inputArray
  let storedValue = null
  let storedFunction = null

  if (localStorageType === "gradeScale") {
    storedValue = gradeScale
    storedFunction = updateGradeScale
  } else {
    storedValue = videoType
    storedFunction = updateVideoType
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
            storedFunction={storedFunction}
            statuses={statuses}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function StatusList({ setOpen, storedFunction, statuses }) {
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
                storedFunction(statuses.find((s) => s.value === value) || null)
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
