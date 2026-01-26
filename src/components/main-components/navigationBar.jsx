import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Home, Settings, Upload, Play, Trophy } from "lucide-react"
import { NavLink } from "react-router-dom"

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Play", href: "/game", icon: Play },
  { title: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { title: "Upload", href: "/upload", icon: Upload },
  { title: "Settings", href: "/settings", icon: Settings },
]

export default function NavigationMenuMobile() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavLink
              // change "py-3" for padding and "size-5" for icon size
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground text-muted-foreground flex w-screen flex-col items-center gap-1 rounded-none p-2 py-3 text-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-5",
                  "transition-colors outline-none",
                  isActive &&
                    "bg-accent text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-accent-foreground focus-visible:ring-[3px]",
                )
              }
            >
              <item.icon />
              {/* <span>{item.title}</span> */}
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
