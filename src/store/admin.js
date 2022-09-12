import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminUsers = createAsyncThunk("GET_ADMIN_USER", () => {
  return axios.get(`/api/admin/users`);
});

export const putAdminUsers = createAsyncThunk("PUT_ADMIN_USER", (user) => {
  return axios.put(`/api/admin/${user.id}`);
});

export const falseAdminUsers = createAsyncThunk("FALSE_ADMIN_USER", (user) => {
  return axios.put(`/api/admin/${user.id}/false`);
});

export const deleteAdminUsers = createAsyncThunk("DELETE_ADMIN_USER", (user) => {
  return axios.delete(`/api/admin/${user.id}`);
});

const adminReducer = createReducer(null, {
  [getAdminUsers.fulfilled]: (state, action) => action.payload,
});

export default adminReducer;
