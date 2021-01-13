import axios from 'axios';
const {url} = require('./config.json')

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
  params: {} // do not remove this, its added to add params later in the config
});

instance.interceptors.request.use(req => {
  req.url + ' "&apiKey=2a2bd21377bd4cb1a3657052986ebc91';
  return req;
});

export default instance;