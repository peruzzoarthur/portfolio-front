import { BlogBreadcrumb } from '@/components/blog-breadcrumb'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/tags')({
  component: PostTags,
})

enum Tag {
  AWS = "AWS",
  GIS = "GIS",
  IAC = "IAC",
  NEST = "NEST",
  POSTGRES = "POSTGRES",
  PRISMA = "PRISMA",
  PYTHON = "PYTHON",
  REACT = "REACT",
  TERRAFORM = "TERRAFORM",
  TEST = "TEST",
  TYPEORM = "TYPEORM",
}

function PostTags() {
  return (
    <>
      <BlogBreadcrumb param="tags" />
      <LayoutWithBars>
        <div>
          <h3 className="text-3xl">Tags</h3>
          <div className="grid grid-cols-4 space-x-2 space-y-2">
            {Object.keys(Tag).map((tag) => (
              <Button variant="ghost" key={tag}>
                #{tag}
              </Button>
            ))}
          </div>
        </div>
      </LayoutWithBars>
    </>
  )
}
