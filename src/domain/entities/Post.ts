export type PostData = {
  id: number
  userId: number
  title: string
  body: string
}

export class Post {
  id: number
  userId: number
  title: string
  body: string

  constructor(input: PostData) {
    this.id = input.id
    this.userId = input.userId
    this.title = input.title
    this.body = input.body
  }
}
