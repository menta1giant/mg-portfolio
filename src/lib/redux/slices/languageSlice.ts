import { createSlice } from '@reduxjs/toolkit'

export interface languageState {
  locale: string
}

const initialState: languageState = {
  locale: 'ru',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLocale } = languageSlice.actions

export default languageSlice.reducer
