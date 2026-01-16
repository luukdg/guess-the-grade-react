import { Separator } from "@radix-ui/react-separator"

function Privacy() {
  return (
    <div className="align-self relative flex h-full w-full flex-1 flex-col items-center overflow-y-auto px-3 pt-3">
      <h1 className="mb-5 text-xl">Privacy Policy</h1>
      <Separator className="border-muted mb-4 w-full border-t" />

      <div className="mb-3 text-sm">
        <p className="mb-3 text-xs">
          <strong>Last updated:</strong> 23 December 2025
        </p>
        <p className="mb-5 font-bold">
          This app does not collect, store, or share any personal data.
        </p>
        <h2 className="font-bold">Data Collection</h2>
        <p className="text-muted-foreground mb-5">
          The app stores limited data locally on your device using local
          storage. This data is used only to maintain app functionality, such as
          tracking your streak, and is never transmitted off the device.
        </p>
        <h2 className="font-bold">Third-Party Services</h2>
        <p className="text-muted-foreground mb-5">
          This app embeds content from YouTube. When interacting with embedded
          YouTube videos, Google may collect data in accordance with its own
          privacy policy.
        </p>
        <h2 className="font-bold">Children’s Privacy</h2>
        <p className="text-muted-foreground mb-5">
          This app does not knowingly collect any information from children.
        </p>
        <h2 className="font-bold">Changes</h2>
        <p className="text-muted-foreground mb-5">
          If this privacy policy changes, it will be updated on this page.
        </p>
        <h2 className="font-bold">Contact</h2>
        <p className="text-muted-foreground">
          If you have any questions about this privacy policy, you can contact:
        </p>
        <p>
          📧{" "}
          <a href="mailto:luukdg.developer@gmail.com">
            luukdg.developer@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Privacy
