'use client'

import { Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

import { PostData } from '@/domain/entities/Post'

export interface PostGridProps {
  posts: PostData[]
}

export default function PostsGrid({ posts }: PostGridProps) {
  const router = useRouter()

  function handleOnClick(postId: number) {
    router.push(`/dashboard/posts/${postId}`)
  }

  return (
    <Grid sx={{ flexGrow: 1, mx: 2 }} spacing={2} container justifyContent="space-evenly">
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Divider />
              <Typography variant="body2" color="textSecondary" component="p" sx={{ mt: 1 }}>
                {post.body}
              </Typography>
              <CardActions sx={{ mt: 1 }}>
                <Button onClick={() => handleOnClick(post.id)} size="small" color="primary">
                  VIEW
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
