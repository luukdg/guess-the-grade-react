export function RandomTip() {
  const tips = [
    "Tired of clicking? Enable 'Submit on drag' to lock in grades faster.",
    "Struggling to survive? Turn on Infinite Mode and play without losing lives.",
    "Videos loading slowly? Set playback speed to 2× in the settings.",
    "Only want indoor or outdoor boulders? You can filter that in the settings.",
    "Grades feel easier on video — remember, camera angles lie.",
    "Power looks impressive, but footwork often decides the grade.",
    "If it looks static, it probably isn't. There's always a hidden crux.",
    "Watch the hips, not the hands. Body position gives away the difficulty.",
    "Long rests between moves usually mean higher grades.",
    "If the climber cuts feet unexpectedly… add a grade.",
    "Even setters argue about grades. You're in good company.",
  ]

  const randomMessage = tips[Math.floor(Math.random() * tips.length)]

  return (
    <>
      <p>
        <strong>Tip: </strong>
        {randomMessage}
      </p>
    </>
  )
}
