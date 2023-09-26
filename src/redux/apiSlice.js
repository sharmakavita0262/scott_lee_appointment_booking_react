import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut, setUser } from "../store/auth/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LOCAL_HOST_API,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken) {
            headers.set("Authorization", Bearer ${ accessToken });
        }
        return headers;
    },
});


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
})