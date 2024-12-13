import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import loading from '../../assets/loading/loading.svg'
import { Post } from '@/components/post'
import { useGetPostById } from '@/hooks/useGetPostById'

export const Route = createFileRoute('/publications/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const { post, isFetchingPost } = useGetPostById(Number(postId))

  return (
    <>
      <div className="min-h-[100vh] flex flex-col space-y-4 bg-black-100 bg-opacity-50">
        <Link to="/publications">
          <Button variant="ghost">
            <ArrowLeft />
          </Button>
        </Link>
        <Separator orientation="horizontal" />

        {isFetchingPost ? (
          <div className="flex justify-center items-center">
            <img src={loading} alt="loading" className="w-6 h-6" />
          </div>
        ) : (
          post && (
            <Post
              id={post.id.toString()}
              title={post.title}
              authors={post.authors}
              content={post.content}
              images={post.images}
            />
          )
        )}
      </div>
    </>
  )
}
