import axios from 'axios';

import { getAuthToken } from './auth';

export class Http {
  constructor(status) {
    axios.defaults.timeout = 5000;
    this.isAuth = status && status.auth ? status.auth : false;
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/api'
    });

    return this.init();
  }

  init() {
    if (this.isAuth) {
      this.instance.interceptors.request.use(
        (request) => {
          request.headers.Authorization = getAuthToken();
          return request;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }

    return this.instance;
  }
}
