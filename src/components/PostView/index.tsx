'use client'

import { Box, Card, CardContent, Divider, Paper, Typography } from '@mui/material'

import { CommentData } from '@/domain/entities/Comment'
import { PostData } from '@/domain/entities/Post'

export interface PostViewProps {
  post: PostData
  comments: CommentData[]
}

export default function PostView({ post, comments }: PostViewProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 2,
        p: 4,
        gap: 2,
      }}
      elevation={3}
      component={Paper}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Typography variant="h4" sx={{ m: 1 }}>
          Post
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mx: 2,
          maxWidth: 'md',
        }}
      >
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mx: 2,
          mt: 1,
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 'md',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Typography
            variant="h6"
            sx={{ m: 1, alignContent: 'flex-start', justifyContent: 'center' }}
          >
            Comments
          </Typography>
        </Box>
        {comments.map((comment) => (
          <Box key={comment.id} sx={{ m: 0.5, width: '100%' }}>
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{ display: 'inline-block', mx: 2 }}
                >
                  {`${comment.name.split(' ').slice(0, 3).join(' ')}`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  gutterBottom
                  sx={{ display: 'inline-block' }}
                >
                  {`(${comment.email})`}
                </Typography>
                <Divider />
                <Typography variant="body2" component="p" sx={{ m: 1 }}>
                  {comment.body}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
