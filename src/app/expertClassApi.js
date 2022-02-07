import axios from 'axios';

const expertClassApi = axios.create({
  // baseURL: 'https://expert-class-backend.herokuapp.com/api/v1/',
  baseURL: 'http://localhost:3001/api/v1/',
  withCredentials: true,
});

export default expertClassApi;
