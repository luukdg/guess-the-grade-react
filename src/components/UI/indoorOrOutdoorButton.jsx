import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const statuses = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "all", label: "All" },
];

export function ComboBoxResponsive({ videoType, setVideoType }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function saveVideoTypeToLocalStorage(videoType) {
    setVideoType(videoType);
    localStorage.setItem("VideoType", JSON.stringify(videoType));
    console.log("VideoType saved to localStorage, value:", videoType);
  }

  return (
    <div className="flex w-full justify-center">
      {isDesktop ? (
        // 💻 Desktop view – Popover
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              {videoType.label}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <StatusList
              setOpen={setOpen}
              saveVideoTypeToLocalStorage={saveVideoTypeToLocalStorage}
            />
          </PopoverContent>
        </Popover>
      ) : (
        // 📱 Mobile view – Drawer
        <Drawer open={open} onOpenChange={setOpen} autoFocus={open}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              {videoType.label}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="pb-safe mt-auto border-t">
            <DrawerTitle className="px-4 pt-4 text-lg font-medium">
              Select video type
            </DrawerTitle>
            <DrawerDescription />
            <div className="mt-4 border-t">
              <StatusList
                setOpen={setOpen}
                saveVideoTypeToLocalStorage={saveVideoTypeToLocalStorage}
              />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
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
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
