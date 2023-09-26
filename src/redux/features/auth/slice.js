import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const initialState = [];
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem('token', action.payload.token);
    },
    getUserData(state, action) {
      state.userDetails = action.payload;
    },
    logout() {
      return {
        ...initialState,
      };
    },
  },
});
export const { addTodo } = authSlice.actions;

export const useAuth = () => useSelector((state) => state.auth);

export default authSlice.reducer;


