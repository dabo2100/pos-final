import axios from 'axios';
import { domain } from '../store';

export const getCategoryProducts = async (categoryId) => {
  let final;
  let endPoint = '/api/categories/' + categoryId;
  let url = domain + endPoint;
  await axios.get(url, { params: { populate: { products: { populate: '*' } } } }).then((res) => {
    final = res.data.data.products;
  });
  return final;
};
