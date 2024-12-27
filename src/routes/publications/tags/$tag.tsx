import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications/tags/$tag')({
  component: () => <div>Hello /publications/tags/$tag!</div>
})