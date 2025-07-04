import { baseApi } from "../baseApi";

const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    borrowBooked: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
    GetAllBorrowBooked: builder.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
    }),
  }),
});

export const { useBorrowBookedMutation, useGetAllBorrowBookedQuery } =
  borrowApi;
