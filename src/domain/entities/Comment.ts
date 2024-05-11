export type CommentData = {
  id: number
  postId: string
  name: string
  email: string
  body: string
}

export class Post {
  id: number
  postId: string
  name: string
  email: string
  body: string

  constructor(input: CommentData) {
    this.id = input.id
    this.postId = input.postId
    this.name = input.name
    this.email = input.email
    this.body = input.body
  }
}
