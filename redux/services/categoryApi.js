import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
        reducerPath: 'categoryApi',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
        endpoints: (builder) => ({
            getCategoryById: builder.query({
                query: (param) => `api/${param}`
            }),

        })
    }
)


export const {useGetCategoryByIdQuery} = categoryApi

