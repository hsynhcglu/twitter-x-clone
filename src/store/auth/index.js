import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: "hsynhcglu",
        fullname: "Huseyin",
        avatar: "https://avatars.githubusercontent.com/u/1961952?v=4",
    },
    accounts: [],
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //reducers
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount.id === action.payload) {
                state.currentAccount = false
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer