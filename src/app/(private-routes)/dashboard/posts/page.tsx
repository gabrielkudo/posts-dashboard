import DashboardWrapper from '@/components/DashboardWrapper'
import PostsGrid from '@/components/PostsGrid'
import { Post } from '@/domain/entities/Post'

export default async function Posts() {
  const fetchPosts = async (): Promise<Post[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      return data as Post[]
    } catch (err) {
      console.log(err)
      return []
    }
  }

  const posts = await fetchPosts()

  return (
    <DashboardWrapper>
      <PostsGrid posts={posts} />
    </DashboardWrapper>
  )
}
