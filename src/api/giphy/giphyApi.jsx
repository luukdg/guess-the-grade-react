import { useEffect, useState } from "react"

export default function GetGif() {
  const [gifUrl, setGifUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GIPHY_KEY

    async function fetchGif() {
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=nice+one&rating=g`,
        )

        if (!res.ok) throw new Error("Failed to fetch GIF")

        const data = await res.json()
        setGifUrl(data.data.images.original.url)
      } catch (err) {
        console.error("Error fetching GIF:", err)
        setError("Failed to load GIF 😢")
      }
    }

    fetchGif()
  }, [])

  if (error) return <p>{error}</p>
  if (!gifUrl) return <p>Loading...</p>

  return (
    <div className="flex w-full items-center justify-center">
      <img src={gifUrl} alt="Random funny GIF" className="rounded-lg" />
    </div>
  )
}
