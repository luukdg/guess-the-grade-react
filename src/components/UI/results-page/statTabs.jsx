import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoStats } from "./statistics"
import ComparePickedGrade from "./comparePickedGrade"

const TabsDemo = ({ videos, currentIndex, currentGrade, guess }) => {
  const tabs = [
    {
      name: "Grade comparison",
      value: "explore",
      content: (
        <>
          <div className="pt-3">
            <ComparePickedGrade currentGrade={currentGrade} guess={guess} />
          </div>
        </>
      ),
    },
    {
      name: "Compare yourself",
      value: "statistics",
      content: (
        <>
          <VideoStats videos={videos} currentIndex={currentIndex} /> View the
          distribution of{" "}
          <span className="text-foreground font-semibold">
            everyone&apos;s{" "}
          </span>
          guesses in the chart.
        </>
      ),
    },
  ]

  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="explore">
        <div className="border-muted rounded-xl border border-1 px-3 py-3">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="text-muted-foreground text-sm">{tab.content}</div>
            </TabsContent>
          ))}
          <div className="pt-3">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default TabsDemo
