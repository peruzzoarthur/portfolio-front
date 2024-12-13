export type Post = {
  id: number
  title: string
  authors: Author[]
  content: string
  abstract: string
  images: Image[]
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export type Author = {
  id: string
  firstName: string
  lastName: string
}

export type Image = {
  filename: string
  id: number
  data: {
    type: string
    data: number[]
  }
}
