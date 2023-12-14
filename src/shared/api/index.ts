import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPost} from "./model";

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        getPosts: build.query<IPost[], { limit: number, start: number }>({
            query: ({limit = 15, start = 0}) => ({
                url: '/posts',
                params:
                    {
                        _limit: limit,
                        _start: start,
                    }
            })
        }),
        getPostById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            })
        })
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery} = postApi