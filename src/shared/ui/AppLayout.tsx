import React from 'react';
import Header from "../../widgets/Header";
import {useParams} from "react-router";
import {Outlet} from "react-router-dom";
import {Toolbar} from "@mui/material";

const AppLayout = () => {
    const {postId} = useParams()

    return (
        <>
            <Header title={postId ? `Post #${postId}` : 'Your posts'}/>
            <Toolbar/>
            <Outlet/>
        </>
    );
};

export default AppLayout;