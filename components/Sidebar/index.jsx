import Link from "next/link"

const Sidebar = () => {
  const navLinks = [
    {
      title: "Introduction",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]
  return (
    <div className="w-[20%] border border-green-600 sticky top-0 h-screen">
      {navLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className="block p-2 my-4 text-sm bg-slate-300 rounded-lg"
          >
            {link.title}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
