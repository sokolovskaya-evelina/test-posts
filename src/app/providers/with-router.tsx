import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PostPage from "../../pages/post-details";
import MainPage from "../../pages/main-page";
import AppLayout from "../../shared/ui/AppLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '/post/:postId',
                element: <PostPage/>
            }
        ]

    },


]);

export const withRouter = () => () => {
    return (
        <RouterProvider router={router}/>
    )
}