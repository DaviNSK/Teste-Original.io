import api from './api';

export default class Repository {
  getProducts = async () => api.get('/products');
}
