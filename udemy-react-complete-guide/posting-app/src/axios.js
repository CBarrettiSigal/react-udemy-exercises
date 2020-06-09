import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Content-Type'] = 'TEST CONTENT TYPE';

export default instance;
