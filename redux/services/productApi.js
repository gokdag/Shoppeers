import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/"}),
    endpoints: (builder) => ({
      getProduct: builder.query({
        query: (arg) =>{
          console.log("arg", arg)
            
      return{
                url:`api/product`,
                body: {productId:arg},
                method:"POST"
            }
        }
      }),
    }),
  })

  export const { useGetProductQuery } = productApi

