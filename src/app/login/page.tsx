// there won't be a signup page because as it's a repair shop app users are going to be manually added by the owner or the it team
"use client"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1>Repair Shop</h1>
      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  )
}
