import axios from 'axios';
import {
  Message
} from 'element-ui';

// let baseURL = 'https://node.hashgard.com/testnet/api';
let baseURL = 'http://rest.hashgard.io:1317'
// if (!location.hostname.match('gardplorer.io')) {
//   baseURL = 'http://api.hgdev.io';
// }
const $ajax = axios.create({
  baseURL
});

$ajax.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    Message({
      type: 'error',
      message: 'Network Error',
      center: true
    });
    return Promise.reject(error);
  }
);

export default $ajax;
