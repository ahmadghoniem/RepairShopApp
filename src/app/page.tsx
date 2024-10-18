import Link from "next/link"
export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 text-white s:max-w-96 mx-auto sm:text-xl">
          <h1 className="font-bold">computer repair shop</h1>
          <address>
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:555555555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  )
}
