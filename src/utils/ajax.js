import axios from 'axios';
import { Message } from 'element-ui';

let baseURL = 'https://www.gardplorer.io/testnet/api';
if (!location.hostname.match('www.gardplorer.io')) {
  baseURL = 'http://api.hgdev.io';
}
const $ajax = axios.create({ baseURL });

$ajax.interceptors.response.use(
  function(config) {
    return config;
  },
  function(error) {
    Message({
      type: 'error',
      message: 'Network Error',
      center: true
    });
    return Promise.reject(error);
  }
);

export default $ajax;
