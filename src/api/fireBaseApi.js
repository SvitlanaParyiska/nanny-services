import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAtMHc7cpDAslWdulvvo-AuzK7imWR2YOk',
  authDomain: 'nanny-services-e6493.firebaseapp.com',
  databaseURL:
    'https://nanny-services-e6493-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nanny-services-e6493',
  storageBucket: 'nanny-services-e6493.appspot.com',
  messagingSenderId: '305110013600',
  appId: '1:305110013600:web:d5e6437342a52f9c71dbc5',
  measurementId: 'G-39Q389JLW9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

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
