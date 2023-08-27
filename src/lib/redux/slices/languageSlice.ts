import { createSlice } from '@reduxjs/toolkit'

export interface languageState {
  isLanguageRus: boolean
}

const initialState: languageState = {
  isLanguageRus: false,
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.isLanguageRus = !state.isLanguageRus
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLanguage } = languageSlice.actions

export default languageSlice.reducer
