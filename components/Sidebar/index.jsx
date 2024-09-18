import { sidebarLinks } from "@/data/nav"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="w-[150px] border border-green-600 sticky top-0 h-screen">
      {sidebarLinks.map((link, index) => {
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
