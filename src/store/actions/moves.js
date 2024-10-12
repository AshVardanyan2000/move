import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import data from '../../backend/data.json';


export const getTendingNow = createAsyncThunk('get/tending/now', async (payload, thunkAPI) => {
  try {

    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data)
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e);

  }
})

export const changeFeaturedData = createAction('change/featured/data');

