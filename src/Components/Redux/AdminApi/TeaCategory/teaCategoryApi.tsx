import { baseApi } from "../../baseApi";

const teaCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `/category/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = teaCategoryApi;
