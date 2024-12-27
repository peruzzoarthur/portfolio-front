import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from './ui/card'
import { Link } from '@tanstack/react-router'
import { formatUpdatedAt } from '@/lib/utils'
import { CalendarDays } from 'lucide-react'
import { Tag } from '@/types'

type PostCardProps = {
    id: number
    title: string
    abstract: string
    updatedAt: string
    tags: Tag[]
}

export const PostCard = ({
    id,
    title,
    abstract,
    updatedAt,
    tags,
}: PostCardProps) => {
    return (
        <>
            <Link
                to={'/publications/$postId'}
                params={{ postId: id.toString() }}
            >
                <Card className="p-4 bg-gray-950 bg-opacity-50 mb-2">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="flex items-center">
                        <CalendarDays className="mr-1" />
                        {formatUpdatedAt(updatedAt)} by{' '}
                    </CardDescription>
                    <CardContent>{abstract}</CardContent>
                    <CardFooter>
                        {tags.map((t) => (
                            <p className="mr-1" key={t}>
                                #{t.toLowerCase()}
                            </p>
                        ))}
                    </CardFooter>
                </Card>
            </Link>
        </>
    )
}
