import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseQuerySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dev.libertify.com/pro/",
    prepareHeaders: (headers) => {
      headers.set(
        "X_libertify_api_key",
        `1qUCUDl1Vi1vQO0q.Jz3vZrWIlfF67HADO0yYul66eWoE6PhomgzGv5CpGskTe3RFGjAMtetxSHe4Rm67`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
});
