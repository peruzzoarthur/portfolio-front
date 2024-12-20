import { Author } from '@/types'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { Link } from '@tanstack/react-router'
import { formatUpdatedAt } from '@/lib/utils'
import { CalendarDays } from 'lucide-react'

type PostCardProps = {
    id: number
    title: string
    authors: Author[]
    abstract: string
    updatedAt: string
}

export const PostCard = ({
    id,
    title,
    authors,
    abstract,
    updatedAt,
}: PostCardProps) => {
    return (
        <>
            <Link
                to={'/publications/$postId'}
                params={{ postId: id.toString() }}
            >
                <Card className="p-4 bg-gray-950 bg-opacity-50 mb-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        <div className="flex items-center">
                            <CalendarDays className="mr-1" />
                            {formatUpdatedAt(updatedAt)} by {" "}
                            {authors.map(
                                (author, index) =>
                                    `${author.firstName} ${author.lastName}${index < authors.length - 1 ? ', ' : ''}`
                            )}
                        </div>
                    </CardDescription>
                    <CardContent>{abstract}</CardContent>
                </Card>
            </Link>
        </>
    )
}
