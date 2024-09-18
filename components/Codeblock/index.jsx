"use client"
import { Copy, Check } from "lucide-react"
import React, { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false)
  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 p-3 text-white bg-black bg-opacity-50 rounded-md"
        onClick={() => setCopied(true)}
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
      <SyntaxHighlighter
        className="h-full text-white"
        language="javascript"
        style={tomorrowNightEighties}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
        showInlineLineNumbers={false}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
