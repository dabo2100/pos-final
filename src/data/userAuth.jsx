import axios from 'axios';
import { domain } from '../store';

export const authUser = async (data) => {
  let final;
  let endPoint = '/api/auth/local';
  let url = domain + endPoint;
  await axios.post(url, data).then((res) => {
    final = res;
  });
  return final;
};
