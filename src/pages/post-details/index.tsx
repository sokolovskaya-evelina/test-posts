import React from 'react';
import {useParams} from "react-router";
import {useGetPostByIdQuery} from "../../shared/api";
import Post from "../../entities/post/Post";
import {useNavigate} from "react-router-dom";
import {LinearProgress} from "@mui/material";
import EmptyMessage from "../../shared/ui/EmptyMessage";
import ErrorMessage from "../../shared/ui/ErrorMessage";

const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, error } = useGetPostByIdQuery(Number(postId));

    const onButtonCLick = () => {
        navigate('/')
    }

    return (
        <>
            {isLoading && <LinearProgress/>}
            {error && <ErrorMessage error={error}/>}
            {data ? <Post {...data} onClick={onButtonCLick} isFull/> : <EmptyMessage isLoading={isLoading}/>}
        </>

    );
};

export default PostPage;