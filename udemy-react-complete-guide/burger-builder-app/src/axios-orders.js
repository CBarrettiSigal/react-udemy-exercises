import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-builder-app-a51eb.firebaseio.com/'
});

export default instance;
