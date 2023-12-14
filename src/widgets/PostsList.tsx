import React, {useEffect, useState} from 'react';
import {useGetPostsQuery} from "../shared/api";
import Post from "../entities/post/Post";
import {Box, LinearProgress} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import EmptyMessage from "../shared/ui/EmptyMessage";
import ErrorMessage from "../shared/ui/ErrorMessage";
import {useInView} from "react-intersection-observer";

const PostsList = () => {
    const [start, setStart] = useState(0)
    const [limit, setLimit] = useState(15)
    const {data = [], error, isLoading} = useGetPostsQuery({start, limit})
    const navigate = useNavigate();
    const { ref: topPost, inView: inViewFirstCard } = useInView({
        threshold: 0.5,
    });

    const { ref: bottomPost, inView: inViewLastCard } = useInView({
        threshold: 0.5,
    });

    const onButtonCLick = (postId: number) => {
        navigate(`/post/${postId}`)
    }

    useEffect(() => {
        if (inViewFirstCard) {
            setStart((prev) => prev > 0 ? prev - 5 : prev);
            setLimit(prevState => prevState > 15 ? prevState -10 : prevState)
        }
    }, [inViewFirstCard]);

    useEffect(() => {
        if (inViewLastCard) {
            setLimit((prevState) => prevState + 10);
            setStart(prevState => limit > 25 ? prevState + 5: prevState)
        }
    }, [inViewLastCard]);

    const getRef = (idx: number) => {
        if (idx % 15 === 0) {
            return bottomPost
        }
        if (idx === 1) {
           return topPost
        }
        return null
    }
    return (
        <>
            {isLoading && <LinearProgress/>}
            {error && <ErrorMessage error={error}/>}
            {data ? <Box display={'grid'} gridTemplateColumns="repeat(5, 1fr)" m={2} gap={3}>
                {data.map((post, idx) => <Box display={'flex'} key={post.id} ref={getRef(idx + 1)}>
                    <Post {...post} onClick={() => onButtonCLick(post.id)}/>
                    </Box>
                    )}
            </Box> : <EmptyMessage isLoading={isLoading} text={'Posts not found'}/>}
        </>
    );
};

export default PostsList;