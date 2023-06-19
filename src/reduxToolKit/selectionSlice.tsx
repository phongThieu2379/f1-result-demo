import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedYear: 2023,
  selectedCategory: "races",
  selectedInfor: "all",
  childActiveKey: "races",
};
export interface I_State {
  selectedYear: number;
  selectedCategory: string;
  selectedInfor: string;
  childActiveKey: string;
}

const selectionSlice = createSlice({
  name: "selectionSlice",
  initialState,
  reducers: {
    selectYearAction: (state, action) => {
      state.selectedYear = action.payload;
    },
    selectCategoryAction: (state, action) => {
      state.selectedCategory = action.payload;
    },
    selectChildActiveKeyAction: (state, action) => {
      state.childActiveKey = action.payload;
    },
    selectInforAction: (state, action) => {
      state.selectedInfor = action.payload;
    },
  },
});

export const {
  selectYearAction,
  selectCategoryAction,
  selectChildActiveKeyAction,
  selectInforAction,
} = selectionSlice.actions;

export default selectionSlice.reducer;
