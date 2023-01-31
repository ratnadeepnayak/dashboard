import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3500";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Tabledata"],
  endpoints: (builder) => ({
    getTableData: builder.query({
      query: () => "/esgData",
      providesTags: ["Tabledata"],
    }),
    addTableData: builder.mutation({
      query: (data) => ({
        url: "/esgData",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tabledata"],
    }),
    updateTableData: builder.mutation({
      query: (data) => ({
        url: `/esgData/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tabledata"],
    }),
    deleteTableData: builder.mutation({
      query: ({ id }) => ({
        url: `/esgData/${id}`,
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
