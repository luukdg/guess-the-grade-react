import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Settings, Upload, Play } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationMenuItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Play", href: "/game", icon: Play },
  { title: "Upload", href: "/upload", icon: Upload },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function NavigationMenuMobile() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "flex h-auto w-screen flex-col items-center py-2.5",
              )}
              asChild
            >
              <NavLink to={item.href}>
                <item.icon className="mb-1.5" />
                {item.title}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
