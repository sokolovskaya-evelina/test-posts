import React from 'react';
import Header from "../../widgets/Header";
import {useParams} from "react-router";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    const {postId} = useParams()

    return (
        <>
            <Header title={postId ? `Post #${postId}` : 'Your posts'}/>
            <Outlet/>
        </>
    );
};

export default AppLayout;