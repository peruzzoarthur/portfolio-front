import { Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

type BlogBreadcrumbProps = {
  param: string | number
}

export const BlogBreadcrumb = ({ param }: BlogBreadcrumbProps) => {
  return (
    <Breadcrumb className="p-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/publications">Publications</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {typeof param === 'number' ? (
            <BreadcrumbPage>Post #{param}</BreadcrumbPage>
          ) : (
            <BreadcrumbPage>{param}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
