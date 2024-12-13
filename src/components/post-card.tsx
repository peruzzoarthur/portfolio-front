import { Author } from '@/types'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { Link } from '@tanstack/react-router'

type PostCardProps = {
  id: number
  title: string
  authors: Author[]
  abstract: string
}

export const PostCard = ({
  id,
  title,
  authors,
  abstract,
}: PostCardProps) => {
  return (
    <>
      <Link
        to={'/publications/$postId'}
        params={{ postId: id.toString() }}
      >
        <Card className="p-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {authors.map(
              (author, index) =>
                `${author.firstName} ${author.lastName}${index < authors.length - 1 ? ', ' : ''}`
            )}
          </CardDescription>
          <CardContent>{abstract}</CardContent>
        </Card>
      </Link>
    </>
  )
}
