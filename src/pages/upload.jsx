"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Check, ChevronsUpDown } from "lucide-react"
import { gradeValues } from "@/constants/gradeValues"
import { uploadNewVideo } from "@/api/uploadNewVideo"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Upload, SearchCheck } from "lucide-react"

const frameworks = [
  {
    value: "indoor",
    label: "Indoor",
  },
  {
    value: "outdoor",
    label: "Outdoor",
  },
]

const profileFormSchema = z.object({
  youtubeLink: z
    .string()
    .nonempty({ message: "You must enter a YouTube link." })
    .refine(
      (val) => {
        return /^https?:\/\/(www\.)?youtube\.com\/(watch\?v=|shorts\/)[\w-]+$/.test(
          val,
        )
      },
      { message: "Please enter a valid YouTube link." },
    ),
  grade: z.string().nonempty({ message: "You must select a grade." }),
  location: z.string().nonempty({ message: "You must select a location." }),
})

export default function UploadSection() {
  const [firstOpen, setFirstOpen] = useState(false)
  const [SecondOpen, setSecondOpen] = useState(false)
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      youtubeLink: "",
      grade: "",
      location: "",
    },
    mode: "onChange",
  })

  async function onSubmit(data) {
    try {
      await uploadNewVideo(data)
      console.log("Upload successful!")
      toast("Succesfully uploaded your video!", {
        description:
          "We will check your submission and add your video to the collection.",
      })
      form.reset()
    } catch (error) {
      console.error("Upload failed:", error)
      toast("Sorry, something went wrong")
    }
  }

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <Toaster position="top-center" />
      <div className="mb-5 flex w-full items-center justify-center gap-2 text-xl font-bold">
        <h1>Upload</h1>
        <Upload className="text-(--muted-foreground)" />
      </div>

      <div className="flex h-full flex-col gap-6">
        <Form {...form}>
          <form
            id="video-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4"
          >
            <h1 className="text-base">Submit your own bouldering video</h1>
            <FormField
              control={form.control}
              name="youtubeLink"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="text-sm">
                    <Input placeholder="Paste a YouTube link" {...field} />
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <Drawer
                  open={SecondOpen}
                  onOpenChange={setSecondOpen}
                  autoFocus={open}
                >
                  <DrawerTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={`w-full justify-between ${
                        !field.value ? "text-muted-foreground" : ""
                      }`}
                    >
                      {field.value
                        ? gradeValues.find((f) => f.value === field.value)
                            ?.label
                        : "Choose a grade..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="pb-safe mt-auto border-t">
                    <DrawerTitle className="px-4 pt-4 text-lg font-medium">
                      Select a grade
                    </DrawerTitle>
                    <DrawerDescription />
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {gradeValues.map((grade) => (
                            <CommandItem
                              key={grade.value}
                              value={grade.value}
                              onSelect={(currentValue) => {
                                field.onChange(currentValue, {
                                  shouldValidate: true,
                                  shouldTouch: true,
                                })
                                console.log(form.watch())
                                setSecondOpen(false)
                              }}
                            >
                              {grade.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  form.watch("grade") === grade.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </DrawerContent>
                  <FormMessage />
                </Drawer>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <Drawer
                  open={firstOpen}
                  onOpenChange={setFirstOpen}
                  autoFocus={open}
                >
                  <DrawerTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={`w-full justify-between ${
                        !field.value ? "text-muted-foreground" : ""
                      }`}
                    >
                      {field.value
                        ? frameworks.find((f) => f.value === field.value)?.label
                        : "Indoor or outdoor..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="pb-safe mt-auto border-t">
                    <DrawerTitle className="px-4 pt-4 text-lg font-medium">
                      Select a Location
                    </DrawerTitle>
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                field.onChange(currentValue, {
                                  shouldValidate: true,
                                  shouldTouch: true,
                                })
                                console.log(form.watch())
                                setFirstOpen(false)
                              }}
                            >
                              {framework.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  form.watch("location") === framework.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </DrawerContent>
                  <FormMessage />
                </Drawer>
              )}
            />
          </form>
        </Form>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-base font-bold">
            Guideline for video submission
          </h1>
          <ul className="list-disc space-y-1 pl-6 text-sm text-(--muted-foreground)">
            <li>YouTube Shorts or regular videos</li>
            <li>Max length: 60 seconds</li>
            <li>Only bouldering content</li>
            <li>No on-screen text or grades</li>
            <li>Clear, stable footage</li>
            <li>Public or unlisted link</li>
          </ul>
        </div>
        <div className="mb-5 flex flex-row items-center justify-center gap-2">
          <SearchCheck className="w-10" />
          <p className="text-sm">
            After submission, a moderator will check your video before it
            appears in the database.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Button
          className="w-full"
          size="lg"
          variant="default"
          type="submit"
          form="video-form"
        >
          Submit video
        </Button>
      </div>
    </div>
  )
}
