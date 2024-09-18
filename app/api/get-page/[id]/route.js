import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET(req) {
  const url = new URL(req.url)
  const id = url.pathname.split("/").pop()
  const pages = await fetchPages()
  const page = pages.find((page) => page.slug === id)
  if (!page) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 })
  }
  return NextResponse.json(page, { status: 200 })
}

async function fetchPages() {
  const postDirectory = path.join(process.cwd(), "content")
  const files = fs.readdirSync(postDirectory)
  const pages = files.map((filename) => {
    const filePath = path.join(postDirectory, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    const slug = filename.replace(".mdx", "")

    const codeMatch = content.match(/```js\n([\s\S]*?)\n```/)
    const codeString = codeMatch ? codeMatch[1] : ""

    const componentMatch = codeString.match(/export default function (\w+)/)
    const component = componentMatch ? componentMatch[1] : ""
    return {
      ...data,
      slug,
      codeString,
      component,
    }
  })
  return pages
}
