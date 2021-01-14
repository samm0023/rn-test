/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {source} = require('../api/config.json');

import axios from '../api/api';
import {post} from '../types/post';
import {article} from '../types/article';

export interface IAction {
  type: string;
  payload: article[];
}

export interface IKeyApi {
  key: string;
  value: string;
}

let initialState: article[];

interface InitialContext {
  state: article[];
  GetInfo: Function;
}
initialState = [];
const Context = createContext<InitialContext>({
  state: initialState,
  GetInfo: () => null,
});

const storeData = async (key: IKeyApi) => {
  try {
    const obj = JSON.stringify(key);
    await AsyncStorage.setItem('X-Api-Key', obj);
  } catch (e) {
    // saving error
  }
};

storeData({key: 'X-Api-Key', value: '2a2bd21377bd4cb1a3657052986ebc91'});

const DataReducer = (state: article[], action: IAction): article[] => {
  switch (action.type) {
    case 'get-data':
      return action.payload;
    default:
      return state;
  }
};

const Provider: React.FC = ({children}): React.ReactElement => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const GetInfo = async () => {
    const data = await axios.get<post>(`?sources=${source}`);

    if (data) {
      dispatch({type: 'get-data', payload: data.data.articles});
    }
  };
  return (
    <Context.Provider value={{state, GetInfo}}>{children}</Context.Provider>
  );
};

export {Context, Provider};
