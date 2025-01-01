import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from './ui/card'
import { Link } from '@tanstack/react-router'
import { formatUpdatedAt } from '@/lib/utils'
import { Tag } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

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
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="flex items-center">
                        <Avatar className="size-8 mr-2">
                            <AvatarImage
                                alt={'Arthur Peruzzo'}
                                src={
                                    'https://avatars.githubusercontent.com/u/73316481?v=4'
                                }
                            />
                            <AvatarFallback>{'AP'}</AvatarFallback>
                        </Avatar>
                        {formatUpdatedAt(updatedAt)}
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
