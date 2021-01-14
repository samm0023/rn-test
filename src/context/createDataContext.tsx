/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useReducer} from 'react';

import axios from '../api/api';
import {post} from '../types/post';
import {article} from '../types/article';

export interface IAction {
  type: string;
  payload: article[];
}

let initialState: article[];
initialState = [];
const Context = createContext<{
  state: article[];
  GetInfo: Function;
}>({state: initialState, GetInfo: () => null});

const DataReducer = (state: article[], action: IAction): article[] => {
  switch (action.type) {
    case 'get-data':
      return action.payload;
    default:
      return state;
  }
};

const Provider: React.FC = ({children}): any => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const GetInfo = async () => {
    const data = await axios.get<post>(
      '?sources=usa-today&apiKey=2a2bd21377bd4cb1a3657052986ebc91',
    );

    if (data) {
      dispatch({type: 'get-data', payload: data.data.articles});
    }
  };
  return (
    <Context.Provider value={{state, GetInfo}}>{children}</Context.Provider>
  );
};

export {Context, Provider};
