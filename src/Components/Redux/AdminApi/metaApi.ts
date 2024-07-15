import { baseApi } from "../baseApi";

const metaDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    totalMetaData: builder.query({
      query: () => ({
        url: "/payment/meta",
        method: "GET",
      }),
      providesTags: ["order", "product", "users"],
    }),
    productPieData: builder.query({
      query: () => ({
        url: "/payment/product-meta",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    monthlyOrderMetaData: builder.query({
      query: () => ({
        url: "/payment/monthly",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useTotalMetaDataQuery,
  useProductPieDataQuery,
  useMonthlyOrderMetaDataQuery,
} = metaDataApi;
