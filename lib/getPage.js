import { server } from "@/config"

export const getPage = async (slug) => {
  const res = await fetch(`${server}/api/get-page/${slug}`, {
    cache: "no-cache",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  const page = await res.json()
  return page
}
