import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
export interface I_SpinnerState {
  isLoading: boolean;
}

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOnAction:(state)=>{
        state.isLoading=true
    },
    setLoadingOffAction:(state)=>{
        state.isLoading=false
    }
  },
});

export const {setLoadingOnAction,setLoadingOffAction} = spinnerSlice.actions;

export default spinnerSlice.reducer;
