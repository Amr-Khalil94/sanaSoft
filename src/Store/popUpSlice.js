import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        isOpen: false,
        targetedMember: {},
    },
    reducers: {
        openPopUp: (state, action) => {
            state.isOpen = action.payload.popUpState;
            state.targetedMember = action.payload.targetedMember;

            console.log(action.payload.targetedMember)
        },
        closePopUp: (state, action) => {
            state.isOpen = action.payload;
        },
    }
})

export default popUpSlice.reducer
export const { openPopUp, closePopUp } = popUpSlice.actions