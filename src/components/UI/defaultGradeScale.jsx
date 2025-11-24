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

export const statuses = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "all", label: "All" },
]

export function DefaultGradeScale() {
  const [open, setOpen] = useState(false)
  const { videoType, setVideoType } = useSettings()

  function saveVideoTypeToLocalStorage(videoType) {
    setVideoType(videoType)
    localStorage.setItem("VideoType", JSON.stringify(videoType))
    console.log("VideoType saved to localStorage, value:", videoType)
  }

  return (
    <div className="">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[100px] justify-center">
            {videoType.label}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="end">
          <StatusList
            setOpen={setOpen}
            saveVideoTypeToLocalStorage={saveVideoTypeToLocalStorage}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

function StatusList({ setOpen, saveVideoTypeToLocalStorage }) {
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
                saveVideoTypeToLocalStorage(
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
