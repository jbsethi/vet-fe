import { Http } from 'api/apiClient';

export const getAuthToken = () => {
  if (localStorage.getItem('jwt')) {
    sessionStorage.setItem('jwt', localStorage.getItem('jwt'));
  }

  return sessionStorage.getItem('jwt');
};

export const removeAuthToken = () => {
  localStorage.removeItem('jwt');
  sessionStorage.removeItem('jwt');
};

export const loginUser = ({ email, password, rememberMe }) => {
  return new Http()
    .post('/auth/login', {
      email,
      password
    })
    .then((response) => {
      if (response.data.token) {
        if (rememberMe) localStorage.setItem('jwt', response.data.token);

        sessionStorage.setItem('jwt', response.data.token);
      }

      return response.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export const userMe = () => {
  return new Http({ auth: true })
    .get('/auth/me')
    .then((response) => {
      return response?.data?.user;
    })
    .catch((error) => {
      throw new Error(error.response?.data || 'Error occurred !');
    });
};

export const logout = () => {
  return new Promise((resolve) => {
    removeAuthToken();
    resolve(true);
  });
};
