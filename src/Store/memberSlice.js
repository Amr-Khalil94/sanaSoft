import { createSlice } from "@reduxjs/toolkit";

//translate
import i18next from "i18next";

const memberSlice = createSlice({
    name: 'member',
    initialState: {
        members: localStorage.getItem('members') ? JSON.parse(localStorage.getItem('members')) : [
            { name: 'Amr Khalil', email: 'amr.reactjs@gmail.com', memberType: 2, subscripe: true, id: 98765432145678, gender: 'female', address: 'alexandria egypt', date: '', phoneNumber: 10259022222, image: null },
            { name: 'moa sayed', email: 'sayed.reactjs@gmail.com', memberType: 1, subscripe: false, id: 98765432145543, gender: 'male', address: 'cairo egypt', date: '', phoneNumber: 10259088888, image: null },
            { name: 'ahmed Khalil', email: 'ahmed.reactjs@gmail.com', memberType: 0, subscripe: true, id: 98756732145678, gender: 'female', address: 'asyut egypt', date: '', phoneNumber: 10259076542, image: null },
            { name: 'ramy hassan', email: 'hassan.reactjs@gmail.com', memberType: 2, subscripe: false, id: 98787632145678, gender: 'male', address: 'aswan egypt', date: '', phoneNumber: 10259023456, image: null },
            { name: 'hassan ramy', email: 'ramy.reactjs@gmail.com', memberType: 2, subscripe: true, id: 98765258145678, gender: 'female', address: 'nweaba egypt', date: '', phoneNumber: 10259027890, image: null },
            { name: 'moa said', email: 'said.reactjs@gmail.com', memberType: 1, subscripe: false, id: 98765942145678, gender: 'male', address: 'alexandria egypt', date: '', phoneNumber: 10259022345, image: null },
        ],
        pageHeader: '',
        currentLang: i18next.language,
        languageChaged: false,
        isMembersUpdated: false,
    },
    reducers: {
        headerSlice: (state, action) => {
            console.log(action.payload)
            state.pageHeader = action.payload
        },
        handleLanguageChanged: (state, action) => {
            state.currentLang = action.payload.currentLang;
            state.languageChaged = action.payload.languageChaged
        },
        deleteMemberSlice: (state, action) => {
            console.log(action.payload)
            state.members = action.payload
            state.isMembersUpdated = true
        },
        memberSubmitData: (state, action) => {
            console.log(action.payload)
            state.members = action.payload
            state.isMembersUpdated = true
        },
        resetUpdatesSlice: (state, action) => {
            state.isMembersUpdated = false
        }
    }

})

export default memberSlice.reducer
export const { headerSlice, handleLanguageChanged, deleteMemberSlice, memberSubmitData, resetUpdatesSlice } = memberSlice.actions