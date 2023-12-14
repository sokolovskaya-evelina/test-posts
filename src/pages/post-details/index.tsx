import { useParams } from 'react-router'
import { useGetPostByIdQuery } from '../../shared/api'
import Post from '../../entities/post/Post'
import { Link, useNavigate } from 'react-router-dom'
import { LinearProgress, Typography } from '@mui/material'
import EmptyMessage from '../../shared/ui/EmptyMessage'
import ErrorMessage from '../../shared/ui/ErrorMessage'

const PostPage = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, error } = useGetPostByIdQuery(Number(postId))

  const onButtonCLick = () => {
    navigate('/')
  }

  return (
        <>
            {isLoading && <LinearProgress/>}
            {error && <ErrorMessage error={error}/>}
            {data ? <Post {...data} onClick={onButtonCLick} isFull/> : <EmptyMessage isLoading={isLoading} text={'Post not found'} children={<Typography m={2} align={'center'}>Please, return to the <Link to={'/'}>home</Link> page</Typography>}/>}
        </>

  )
}

export default PostPage
