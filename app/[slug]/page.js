import CodeBlock from "@/components/Codeblock"
import DynamicComponent from "@/components/DynamicComponent"
import { getPage } from "@/lib/getPage"

const SinglePage = async (params) => {
  const { slug } = params.params
  const content = await getPage(slug)
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto my-12">
        <h2 className="text-2xl font-bold mb-4">Demo:</h2>
        <DynamicComponent name={content.component} />
      </div>
      <div className="w-[90%] mx-auto my-4 rounded-md overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Code:</h2>
        <CodeBlock>{content.codeString}</CodeBlock>
      </div>
    </div>
  )
}

export default SinglePage
