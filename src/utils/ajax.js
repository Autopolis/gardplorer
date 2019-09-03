import axios from 'axios';
import {
  Message
} from 'element-ui';

let baseURL = 'https://node.hashgard.com/testnet/api';
if (!location.hostname.match('gardplorer.io')) {
  // baseURL = 'http://api.hgdev.io';
  baseURL = 'http://rest.hashgard.io:1317';
}
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
