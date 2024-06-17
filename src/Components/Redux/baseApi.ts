import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "next/headers";
import { RootState } from "./store";

const baseQueryF = fetchBaseQuery({
  baseUrl: "http://localhost:3333/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.accessToken;
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryF,
  tagTypes: ["users", "category", "product"],
  endpoints: () => ({}),
});
