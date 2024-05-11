'use client'

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

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
        alignContent: 'center',
        justifyContent: 'center',
        mx: 2,
        maxWidth: 'md',
      }}
      elevation={3}
      component={Paper}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Card elevation={4} sx={{ width: '100%', maxWidth: 'md' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              {post.title}
            </Typography>
            <Divider />
            <Typography variant="h6" color="textSecondary">
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
          <Box
            key={comment.id}
            sx={{
              m: 0.5,
              width: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              mx: { xs: 1, sm: 2, md: 4, lg: 6 },
            }}
          >
            <Card>
              <CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {comment.name.slice(0, 1).toUpperCase()}
                    </Avatar>
                  }
                  title={`${comment.name.split(' ').slice(0, 3).join(' ')}`}
                  subheader={comment.email}
                />
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
