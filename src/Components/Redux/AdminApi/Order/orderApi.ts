import { baseApi } from "../../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    cashOnPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/cash",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["order"],
    }),
    onlinePayment: builder.mutation({
      query: (id: string) => ({
        url: `/payment/init/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useCashOnPaymentMutation,
  useOnlinePaymentMutation,
} = orderApi;
