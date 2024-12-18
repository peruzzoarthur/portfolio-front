import { createFileRoute } from '@tanstack/react-router'
import loading from '../../assets/loading/loading.svg'
import { Post } from '@/components/post'
import { useGetPostById } from '@/hooks/useGetPostById'
import { BlogFooter } from '@/components/blog-footer'
import { BlogBreadcrumb } from '@/components/blog-breadcrumb'

export const Route = createFileRoute('/publications/$postId')({
  component: PostById,
})

function PostById() {
  const { postId } = Route.useParams()
  const { post, isFetchingPost } = useGetPostById(Number(postId))

  return (
    <>
      <div className="min-h-[100vh] flex flex-col space-y-4 bg-black-100 bg-opacity-50">
        <BlogBreadcrumb param={Number(postId)} />
        {isFetchingPost ? (
          <div className="flex justify-center items-center">
            <img src={loading} alt="loading" className="w-6 h-6" />
          </div>
        ) : (
          post && (
            <>
              <Post
                id={post.id.toString()}
                title={post.title}
                authors={post.authors}
                content={post.content}
                images={post.images}
              />
              <BlogFooter />
            </>
          )
        )}
      </div>
    </>
  )
}
