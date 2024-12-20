import { enhanceMarkdownWithImages } from '@/lib/utils'
import { Author, Image } from '@/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Separator } from './ui/separator'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import mocha from 'react-syntax-highlighter-catppuccin/mocha'
import { LayoutWithBars } from './blog-layout-bars'
import { BlogBreadcrumb } from './blog-breadcrumb'

type PostProps = {
  id: string
  title: string
  authors: Author[]
  content: string
  images: Image[]
}

export const Post = ({ id, title, authors, content, images }: PostProps) => {
  const contentWithImages = enhanceMarkdownWithImages(id, content, images)
  return (
    <LayoutWithBars>
        <BlogBreadcrumb param={Number(id)} />
      <div className="prose dark:prose-invert w-full max-w-3xl px-6 py-8 ">
        <h1 className="text-2xl">{title}</h1>
        {authors.map((a) => (
          <p key={a.id} className="text-sm">
            {a.firstName} {a.lastName}
          </p>
        ))}
        <Separator orientation="horizontal" />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <ReactSyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  style={mocha}
                >
                  {String(children).replace(/\n$/, '')}
                </ReactSyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {contentWithImages}
        </ReactMarkdown>
        <Separator orientation="horizontal" />
      </div>
    </LayoutWithBars>
  )
}
