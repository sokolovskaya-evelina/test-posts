import React from 'react';
import {useGetPostsQuery} from "../shared/api";
import Post from "../entities/post/Post";
import {Box, LinearProgress} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import EmptyMessage from "../shared/ui/EmptyMessage";
import ErrorMessage from "../shared/ui/ErrorMessage";

const PostsList = () => {
    const {data, error, isLoading} = useGetPostsQuery({start: 0})
    const navigate = useNavigate();

    const onButtonCLick = (postId: number) => {
        console.log(postId)
        navigate(`/post/${postId}`)
    }

    return (
        <>
            {isLoading && <LinearProgress/>}
            {error && <ErrorMessage error={error}/>}
            {data ? <Box display={'grid'} gridTemplateColumns="repeat(5, 1fr)" m={2} gap={3}>
                {data.map(post => <Post {...post} onClick={() => onButtonCLick(post.id)} key={post.id}/>)}
            </Box> : <EmptyMessage isLoading={isLoading} text={'Posts not found'}/>}
        </>
    );
};

export default PostsList;