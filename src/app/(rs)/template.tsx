// re-rerenders every time while a layout renders only once on initial render

export default async function RSLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="animate-appear">{children}</div>
}
