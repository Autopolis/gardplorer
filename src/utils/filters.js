import moment from 'dayjs';
import { isEmpty } from 'lodash';

export const upper = s => s.toUpperCase();

export const formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss');

export const amount = ls => (isEmpty(ls) ? '0' : ls.map(i => `${i.amount} ${i.denom}`).join(', '));
