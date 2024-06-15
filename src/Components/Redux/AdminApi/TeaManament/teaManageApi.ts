import { url } from "inspector";
import { baseApi } from "../../baseApi";

const teaManageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getAllProduct: builder.query({
      query: (args: Record<string, any>) => {
        console.log("Args", args);
        return {
          url: "/product",
          method: "GET",
          params: args,
        };
      },
      providesTags: ["product"],
    }),
    singleProduct: builder.query({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    deleteSingleProduct: builder.mutation({
      query: (id: string) => ({
        url: `/product/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["product"],
    }),
    updateSingleProduct: builder.mutation({
      query: (data) => {
        console.log("Props Data", data);
        return {
          url: `/product/updated/${data.id}`,
          method: "PATCH",
          body: data.item,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useDeleteSingleProductMutation,
  useSingleProductQuery,
  useUpdateSingleProductMutation,
} = teaManageApi;
