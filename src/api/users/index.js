import { Http } from 'api/apiClient';

export const getUsersList = () => {
  return new Http({ auth: true })
    .get('/users')
    .then((response) => {
      console.log(response);

      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response?.data || 'Error occurred !');
    });
};
