import { baseApi } from "../baseApi";

const userOrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrder: builder.query({
      query: (args: any) => ({
        url: "/order/my-order",
        method: "GET",
        params: args,
      }),
      providesTags: ["order"],
    }),
  }),
});

export const { useGetUserOrderQuery } = userOrderApi;
