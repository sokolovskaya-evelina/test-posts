import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { type IPost } from '../../shared/api/model'

interface Props {
  isFull?: boolean
  onClick: () => void
}

const Post = ({ title, id, body, isFull, onClick }: IPost & Props) => {
  return (
        <Card variant="outlined" sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          m: isFull ? 2 : 0
        }}>
            {isFull && <CardActions sx={{ alignSelf: 'flex-start', pb: 0 }}>
                <Button onClick={onClick} size="small">{'< Back'}</Button>
              </CardActions>}
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Post #{id}</Typography>
                <Typography variant="h5" component="div">{title}</Typography>
                <Typography variant="body2">
                    {`${body.length >= 20 && !isFull ? body.substring(0, 50).trim() + '...' : body}`}
                </Typography>
            </CardContent>
            {!isFull && <CardActions>
                <Button onClick={onClick} size="small">Show all</Button>
              </CardActions>}

        </Card>
  )
}

export default Post
