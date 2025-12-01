'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
  const router = useRouter();
  const handleSignOut = () => router.push("/sign-in");

  const user = { name: "AKSHAY CHANDEL", email: "contact@akshay.com" };
  const firstName = user.name.split(" ")[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 hover:text-yellow-500">

          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          {/* First Name (Hidden on small screens) */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">{firstName}</span>
          </div>

        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-gray-400 w-56">

        {/* Profile Section */}
        <DropdownMenuLabel>
          <div className="flex items-center gap-3 py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">{firstName}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-400 text-md font-medium focus:bg-transparent focus:text-yellow-500 flex items-center"
        >
          <LogOut className="h-4 w-4 mr-2 " />
          Logout
        </DropdownMenuItem>

        {/* Mobile Nav */}
        <DropdownMenuSeparator className="bg-gray-600 sm:hidden" />

        <div className="sm:hidden px-2 py-1">
          <NavItems />
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
