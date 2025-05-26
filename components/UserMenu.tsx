"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu";
import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

const UserMenu = () => {
  const { data: session } = useSession();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-brand-gray-dark px-5 py-2 text-md">
            Hi! {session?.user?.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="px-5 py-2">
              <button
                className="flex items-center justify-center gap-1 text-brand-gray-dark"
                onClick={() => signOut()}
              >
                Logout <LogOut />
              </button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default UserMenu;
