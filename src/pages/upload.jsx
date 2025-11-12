"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { numericGrades } from "@/constants/numericGrades";

const frameworks = [
  {
    value: "indoor",
    label: "Indoor",
  },
  {
    value: "outdoor",
    label: "Outdoor",
  },
];

const profileFormSchema = z.object({
  youtubeLink: z
    .string()
    .nonempty({ message: "You must enter a YouTube link." })
    .refine(
      (val) => {
        return /^https?:\/\/(www\.)?youtube\.com\/(watch\?v=|shorts\/)[\w-]+$/.test(
          val,
        );
      },
      { message: "Please enter a valid YouTube link." },
    ),
  grade: z.string().nonempty({ message: "You must select a grade." }),
  location: z.string().nonempty({ message: "You must select a location." }),
});

export default function Upload() {
  const [firstOpen, setFirstOpen] = useState(false);
  const [SecondOpen, setSecondOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      youtubeLink: "",
      grade: "",
      location: "",
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log("The form object: ", data);
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h1 className="text-xl font-bold">Upload your own bouldering video</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="youtubeLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Youtube link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.youtube.com/shorts/LPGwTAJkpJM"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Fill in the link of the youtube video.
                </FormDescription>
                <FormMessage />
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
                <DrawerTrigger asChild className="m-0">
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {field.value
                      ? numericGrades.find((f) => f.value === field.value)
                          ?.label
                      : "Choose a grade..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </DrawerTrigger>
                <DrawerDescription className="mt-2 mb-2">
                  Pick a grade between 5a and 8a.
                </DrawerDescription>
                <FormMessage />
                <DrawerContent className="pb-safe mt-auto border-t">
                  <DrawerTitle className="px-4 pt-4 text-lg font-medium">
                    Select a grade
                  </DrawerTitle>
                  <DrawerDescription />
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        {numericGrades.map((grade) => (
                          <CommandItem
                            key={grade.value}
                            value={grade.value}
                            onSelect={(currentValue) => {
                              field.onChange(currentValue, {
                                shouldValidate: true,
                                shouldTouch: true,
                              });
                              console.log(form.watch());
                              setSecondOpen(false);
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
                <DrawerTrigger asChild className="m-0">
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {field.value
                      ? frameworks.find((f) => f.value === field.value)?.label
                      : "Indoor or outdoor..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </DrawerTrigger>
                <DrawerDescription className="mt-2 mb-2">
                  Rock or plastic?
                </DrawerDescription>
                <FormMessage />
                <DrawerContent className="pb-safe mt-auto border-t">
                  <DrawerTitle className="px-4 pt-4 text-lg font-medium">
                    Select a Location
                  </DrawerTitle>
                  <DrawerDescription />
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
                              });
                              console.log(form.watch());
                              setFirstOpen(false);
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
              </Drawer>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
