import { NextRequest, NextResponse } from "next/server"

export async function GET(req) {
  const url = new URL(req.url)
  console.log(url)
  return NextResponse.json({ message: "Hello" }, { status: 200 })
}
