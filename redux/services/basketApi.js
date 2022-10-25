import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/"}),
    endpoints: (builder) => ({
      getBasket: builder.query({
        query: (arg) =>{
          console.log("arg", arg)
            
      return{
                url:`api/basket`,
                body: {productId:arg},
                method:"POST"
            }
        }
      }),
    }),
  })

  export const { useGetBasketQuery } = basketApi