/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default client;
