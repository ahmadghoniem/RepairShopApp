"use client"
import NavButton from "@/components/NavButton"
import { HomeIcon, File, UsersRound, LogOut } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "@/components/ui/button"
export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="justify-between flex h-8 items-center w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" icon={HomeIcon} label="Home" />
          <Link
            href="/home"
            className="flex justify-center items-center"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" icon={File} label="Tickets" />
          <NavButton href="/customers" icon={UsersRound} label="Customers" />
          <ModeToggle />
          <Button
            asChild
            variant="ghost"
            className="rounded-full"
            title="logout"
            size="icon"
            aria-label="logOut"
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
