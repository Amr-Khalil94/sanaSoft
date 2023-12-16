import { configureStore } from "@reduxjs/toolkit";

//slices
import loginSlice from "./loginSlice"
import memberSlice from "./memberSlice"
import popUpSlice from "./popUpSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
    members: memberSlice,
    popUp: popUpSlice,
  },
});
