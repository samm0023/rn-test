/* eslint-disable prettier/prettier */

import createDataContext from './createDataContext';
import axios from "../api/api";


let _storeData = async () => {
  try {

  } catch (error) {
    // Error saving data
  }
};
const DataReducer = (state, action) => {
  switch (action.type) {
    case 'get-data':
      return action.payload;
    default:
      return state;
  }
};

const GetInfo = (dispatch) => async () => {
    const data = await (await axios.get('?sources=usa-today&apiKey=2a2bd21377bd4cb1a3657052986ebc91')).data;
    if (data) {
              dispatch({ type: 'get-data', payload: data });    }
};


export const { Provider, Context } = createDataContext(
    DataReducer,
  { GetInfo },
  {  data: {} });
