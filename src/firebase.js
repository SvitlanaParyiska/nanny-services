import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

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
export const db = getDatabase(app);
export const auth = getAuth(app);
