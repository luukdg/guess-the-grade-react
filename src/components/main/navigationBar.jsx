import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Home, Settings, Upload, Play } from "lucide-react"
import { NavLink } from "react-router-dom"

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Play", href: "/game", icon: Play },
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
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex h-auto w-screen flex-col items-center gap-1 rounded-none p-2 py-2.5 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
                  "transition-colors outline-none",
                  isActive &&
                    "bg-accent text-accent-foreground focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                )
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
