import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phoneNumber: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
