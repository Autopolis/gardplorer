import moment from 'dayjs';
import numeral from 'numeral';
import Big from 'big.js';
import { isEmpty } from 'lodash';

export const upper = s => s.toUpperCase();

export const formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

export const formatAGARD = agard => {
  const n = Big(agard).div(Math.pow(10, 18));
  return numeral(n.toString()).format('0,0.[0000]');
};
