import { createFileRoute } from '@tanstack/react-router'
import loading from '../../assets/loading/loading.svg'
import { useGetPosts } from '@/hooks/useGetPosts'
import { PostCard } from '@/components/post-card'
import { LayoutWithBars } from '@/components/blog-layout-bars'
import { BlogFooter } from '@/components/blog-footer'

export const Route = createFileRoute('/publications/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { posts, isFetchingPosts } = useGetPosts()

    return (
        <div className=" bg-black-100 bg-opacity-50">
            <div className="min-h-[110vh] p-4 flex flex-col space-y-4">
                <LayoutWithBars>
                    <h2 className="text-2xl mb-2 mt-10">Posts</h2>
                    {isFetchingPosts ? (
                        <div className="flex justify-center items-center">
                            <img
                                src={loading}
                                alt="loading"
                                className="w-6 h-6"
                            />
                        </div>
                    ) : (
                        posts &&
                        posts.map((post) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                abstract={post.abstract}
                                updatedAt={post.updatedAt}
                                tags={post.tags}
                            />
                        ))
                    )}
                </LayoutWithBars>
            </div>
            <BlogFooter />
        </div>
    )
}
