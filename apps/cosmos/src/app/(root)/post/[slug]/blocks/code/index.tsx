import type { PostBlock } from '@types'
import { POST } from '@/enums'

interface CodeBlockProps {
  code: PostBlock.CodeBlock
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className='xl:w-[1024px]'>
      <pre>
        <code>{code.code.text}</code>
      </pre>
    </div>
  )
}
