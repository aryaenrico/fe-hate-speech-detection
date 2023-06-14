import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './reducers/dataSlice';
export default configureStore({
  reducer:{
      data:dataSlice
  }   
})