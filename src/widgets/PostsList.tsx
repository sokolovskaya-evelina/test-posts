import React, {useEffect, useState} from 'react';
import {useGetPostsQuery} from "../shared/api";
import Post from "../entities/post/Post";
import {Alert, Box, LinearProgress, Typography} from "@mui/material";

const PostsList = () => {
    const {data, error, isLoading} = useGetPostsQuery({start: 0})
    const [errorIsOpen, setErrorIsOpen] = useState(false)

    useEffect(() => {
        error && setErrorIsOpen(true)
        setTimeout(() => setErrorIsOpen(false), 5000)
    }, [error])


    const getErrorMessage = () => {
        if (error) {
            if ('status' in error) {
                return 'error' in error ? error.error : JSON.stringify(error.data)
            } else {
                return error.message
            }
        }
    }

    return (
        <>
            {isLoading && <LinearProgress/>}
            {errorIsOpen && <Alert sx={{m: 2, maxWidth: '300px'}} severity='error'>{getErrorMessage()}</Alert>}
            {data ? <Box display={'grid'} gridTemplateColumns="repeat(5, 1fr)" m={2} gap={3}>
                {data.map(post => <Post {...post} key={post.id}/>)}
            </Box> : <Typography m={2} align={'center'}>{isLoading ? 'Loading your posts 😊' : 'Posts not found 😟'}</Typography>}
        </>
    );
};

export default PostsList;