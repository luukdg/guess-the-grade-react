import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "../textarea"
import { useForm } from "react-hook-form"
import { submitReport } from "@/api/submitReport"
import { useSettings } from "@/context/settingsContext"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const reportFormSchema = z.object({
  issue: z.string().nonempty({ message: "You must enter something." }),
})

export function Report({ firebaseId, openToaster }) {
  const [open, setOpen] = useState(false)
  const [report, setReport] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reportFormSchema),
  })
  const { videoId } = useSettings()

  const onSubmit = async (data) => {
    try {
      await submitReport(firebaseId, data.issue, videoId)
      reset()
      setOpen(false)
      setReport(true)
      openToaster("Thank you for reporting.")
    } catch (e) {
      console.log(e)
      openToaster("Sorry, something went wrong.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="default">
          Report
        </Button>
      </DialogTrigger>

      {!report ? (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Report a video</DialogTitle>
            <DialogDescription>
              Please tell us why you&apos;re reporting this video.
            </DialogDescription>
          </DialogHeader>

          {/* Wrap in form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-3">
              <Textarea
                {...register("issue")}
                placeholder="Describe the issue…"
              />
              {errors.issue && (
                <p className="text-destructive text-sm">
                  {errors.issue.message}
                </p>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Report</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>You&apos;ve already reported this video.</DialogTitle>
            <DialogDescription>
              Each video can only be reported once.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}
