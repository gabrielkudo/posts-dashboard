import DashboardWrapper from '@/components/DashboardWrapper'
import PostView from '@/components/PostView'
import { CommentData } from '@/domain/entities/Comment'
import { PostData } from '@/domain/entities/Post'

export default async function Posts({ params }: { params: { postId: string } }) {
  const { postId } = params
  const fetchData = async (): Promise<{ comments: CommentData[]; post: PostData }> => {
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
      ])

      const postData = await postResponse.json()
      const commentData = await commentsResponse.json()
      return {
        comments: commentData,
        post: postData,
      }
    } catch (err) {
      console.log(err)
    }

    return { comments: [], post: {} as PostData }
  }

  const { post, comments } = await fetchData()

  return (
    <DashboardWrapper>
      <PostView post={post} comments={comments}></PostView>
    </DashboardWrapper>
  )
}
