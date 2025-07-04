import { baseApi } from "../baseApi";

const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
    getAllBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id: string | undefined) => ({
        url: `/books/${id}`,
        method: "GET",
      }),

      providesTags: ["books"],
    }),

    deleteBooks: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useDeleteBooksMutation,
  useUpdateBookMutation,
} = booksApi;
