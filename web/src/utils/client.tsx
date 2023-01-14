/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default client;
