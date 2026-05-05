/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"

const gifLinks = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenU0emt5bnQycm5kMTR6ZzlyOGl3YjlicnU5bXN0Y2R3dHNic2FkZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yJFeycRK2DB4c/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RwaGRrZWo5Zzd2NmwwMjRtYm02ejdkaGZicXlwM295enZrbHIycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/m745dTCAxerHa/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RwaGRrZWo5Zzd2NmwwMjRtYm02ejdkaGZicXlwM295enZrbHIycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NEvPzZ8bd1V4Y/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZxbzV4MTdvbW1jZW1pNW5yaDhlMGRtMHhlc2VpcHFkanFra2VhZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YRuFixSNWFVcXaxpmX/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTZxbzV4MTdvbW1jZW1pNW5yaDhlMGRtMHhlc2VpcHFkanFra2VhZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0MHgWp8xxjdd0TW0n6/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2l5NDBiMzdqMGs3bjNoMzA4M2Zsemtud2d4Mno1YmlrMG9mNmdyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/okLCopqw6ElCDnIhuS/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhsd2g1YzdydmZxM2s3ZTYzcDV2enRkaXoydnhvNnFmYjk1bWRhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwAZ6dvvvaTtdI8SD5/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG5pMTZ5c3dqbmU1enU0dWdsMjB6ZjRianMxMHRiNTkwZzlxaDZicCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f9Rrghj6TDckb5nZZR/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmRzaGowYndnZjV4a2Qzc2ZrZ3F4anJkeTVrNTN3ZGViZW94a20yNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7gNXVIPKkQad0AIIFJ/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnRlZm5pMXUxd2VnOXZscmllcTR3N29tb3Rsd21hNGI2ZzZ3Mm9wNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cyntNbcW2R7O2BKWEA/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnRlZm5pMXUxd2VnOXZscmllcTR3N29tb3Rsd21hNGI2ZzZ3Mm9wNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lA3qoZE4TKQhi/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2F5bHhweDU2cmxjOTNmM3IwOXkydWowbzk2Z3Rtc3JlODd2d3pveSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2F5bHhweDU2cmxjOTNmM3IwOXkydWowbzk2Z3Rtc3JlODd2d3pveSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lxxOGaDRk4f7R5TkBd/giphy.gif",
]

export default function GetGif({ maxStreak }) {
  const [gifUrl, setGifUrl] = useState(null)

  useEffect(() => {
    // pick GIF based on maxStreak or randomly
    const index = maxStreak
      ? maxStreak % gifLinks.length
      : Math.floor(Math.random() * gifLinks.length)
    setGifUrl(gifLinks[index])
  }, [maxStreak])

  if (!gifUrl) return <p>Loading...</p>

  return (
    <div className="flex w-full items-center justify-center">
      <img src={gifUrl} alt="Highscore GIF" className="rounded-lg" />
    </div>
  )
}
