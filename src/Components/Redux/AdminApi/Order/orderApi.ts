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
      query: (args: Record<string, any>) => ({
        url: "/order",
        method: "GET",
        params: args,
      }),
      providesTags: ["order"],
    }),
    getAllOrderDelivery: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/order/delivery",
        method: "GET",
        params: args,
      }),
      providesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: (id: string) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    getSingleOrderSendMail: builder.mutation({
      query: (id: string) => ({
        url: `/order/delivery/${id}`,
        method: "PATCH",
      }),
    }),
    cashOnPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/cash",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    onlinePayment: builder.mutation({
      query: (id: string) => ({
        url: `/payment/init/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["order"],
    }),
    orderStatusUpdate: builder.mutation({
      query: (data) => {
        console.log("Params", data);
        return {
          url: `/order/status/${data.id}`,
          method: "PATCH",
          body: data.body,
        };
      },
      invalidatesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id: string) => ({
        url: `/order/delete/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useCashOnPaymentMutation,
  useOnlinePaymentMutation,
  useGetSingleOrderQuery,
  useOrderStatusUpdateMutation,
  useGetAllOrderDeliveryQuery,
  useGetSingleOrderSendMailMutation,
  useDeleteOrderMutation,
} = orderApi;
