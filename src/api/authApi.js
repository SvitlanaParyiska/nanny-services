import axios from 'axios';

export const register = async body => {
  const { data } = await axios.post('users/register', body);
  return data;
};

export const login = async body => {
  const { data } = await axios.post('users/login', body);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('users/logout');
  return data;
};

export const refresh = async () => {
  const { data } = await axios.get('users/current');
  return data;
};
