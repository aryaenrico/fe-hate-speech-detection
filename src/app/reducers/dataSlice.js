import { createSlice } from '@reduxjs/toolkit';
export const dataSlice = createSlice({
  name:'datas',
  initialState:{
    angka:[1,2,3,4,5]
  },
 reducers:{
     change:(state) =>{
      state.angka.length =0;
      state.angka = [4,5,6];
     }
 }
})
export const {change} = dataSlice.actions;
export default dataSlice.reducer;
