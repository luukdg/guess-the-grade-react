import { Spinner } from "@/components/ui/spinner"

const SplashScreen = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Spinner className="size-12" />
    </div>
  )
}

export default SplashScreen
