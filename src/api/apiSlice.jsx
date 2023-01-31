import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3500";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Tabledata"],
  endpoints: (builder) => ({
    getTableData: builder.query({
      query: () => "/todos",
      providesTags: ["Tabledata"],
    }),
    addTableData: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Tabledata"],
    }),
    updateTableData: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Tabledata"],
    }),
    deleteTableData: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Tabledata"],
    }),
  }),
});

export const {
  useGetTableDataQuery,
  useAddTableDataMutation,
  useUpdateTableDataMutation,
  useDeleteTableDataMutation,
} = apiSlice;
