import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    AutObj: {},
    logedIn: false

  },

  reducers: {
    loginReducer: (state, action) => {
      localStorage.setItem("useAuth", JSON.stringify(action.payload))
      localStorage.setItem("logedIn", true);
      state.AutObj = JSON.stringify(action.payload)
      state.logedIn = true
    },
    logOutSlice: (state, action) => {
      localStorage.setItem("logedIn", false);
      localStorage.removeItem("useAuth");
      state.AutObj = []
      state.logedIn = false;
    },
  },
})

export const { login, loginReducer, logOutSlice } = loginSlice.actions
export default loginSlice.reducer;
