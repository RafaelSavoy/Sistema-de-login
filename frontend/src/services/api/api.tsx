import React from 'react';
import axios from 'axios';
import { API } from '../../utils/server';

const baseURL =
  process.env.NODE_ENV == 'production' ? API : 'http://localhost:4000';

const api = axios.create({
  baseURL,
  timeout: 1000,
});
export default api;
