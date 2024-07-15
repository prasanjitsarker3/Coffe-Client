import { baseApi } from "../../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args: any) => ({
        url: "/users",
        method: "GET",
        params: args,
      }),
      providesTags: ["users"],
    }),
    roleUpdate: builder.mutation({
      query: (data) => ({
        url: `/users/role/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/users/delete/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateProfileInfo: builder.mutation({
      query: (data: any) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useRoleUpdateMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetMeQuery,
  useUpdateProfileInfoMutation,
} = userApi;
