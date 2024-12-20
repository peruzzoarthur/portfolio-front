import { BlogBreadcrumb } from '@/components/blog-breadcrumb'
import { BlogFooter } from '@/components/blog-footer'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/tags')({
    component: PostTags,
})

enum Tag {
    AWS = 'AWS',
    GIS = 'GIS',
    IAC = 'IAC',
    NEST = 'NEST',
    POSTGRES = 'POSTGRES',
    PRISMA = 'PRISMA',
    PYTHON = 'PYTHON',
    REACT = 'REACT',
    TERRAFORM = 'TERRAFORM',
    TEST = 'TEST',
    TYPEORM = 'TYPEORM',
}

function PostTags() {
    return (
        <div className="min-h-[100vh] flex flex-col space-y-4 bg-black-100 bg-opacity-50">
            <LayoutWithBars>
                <BlogBreadcrumb param="Tags" />
                <div className='h-[90vh]'>
                    <h3 className="text-3xl">Tags</h3>
                    <div className="grid grid-cols-4 space-x-2 space-y-2">
                        {Object.keys(Tag).map((tag) => (
                            <Button variant="ghost" key={tag}>
                                #{tag.toLowerCase()}
                            </Button>
                        ))}
                    </div>
                </div>
            </LayoutWithBars>
            <BlogFooter />
        </div>
    )
}
