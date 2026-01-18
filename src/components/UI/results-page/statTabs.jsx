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
          <VideoStats
            videos={videos}
            currentIndex={currentIndex}
            currentGrade={currentGrade}
            guess={guess}
          />
        </>
      ),
    },
  ]

  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="explore">
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="text-muted-foreground text-sm">{tab.content}</div>
          </TabsContent>
        ))}

        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default TabsDemo
