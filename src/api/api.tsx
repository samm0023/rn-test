import axios, {AxiosRequestConfig} from 'axios';
const {url} = require('./config.json');
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IKeyApi} from '../context/createDataContext';

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  // do not remove this, its added to add params later in the config
});

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('X-Api-Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

instance.interceptors.request.use(async (req: AxiosRequestConfig) => {
  let data = (await getData()) as IKeyApi;
  req.headers = {'X-Api-Key': data.value};
  return req;
});

export default instance;
