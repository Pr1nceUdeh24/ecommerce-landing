import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand?: string
  thumbnail: string
  images: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

// Single RTK Query API slice: handles fetching, caching, loading and error
// states for the Bestseller Products section, plus "Load More" pagination
// via an incrementing `limit`.
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, { limit?: number; skip?: number }>({
      query: ({ limit = 10, skip = 0 } = {}) =>
        `products?limit=${limit}&skip=${skip}&select=id,title,description,category,price,discountPercentage,rating,stock,brand,thumbnail,images`,
      providesTags: ['Products'],
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
