import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function GameOverButtons({ restart }) {
  const navigate = useNavigate()

  return (
    <>
      <Button
        size="default"
        variant="outline"
        className="flex-1"
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        size="default"
        variant="destructive"
        className="flex-1"
        onClick={restart}
      >
        Restart
      </Button>
    </>
  )
}
