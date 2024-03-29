import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, child, get } from 'firebase/database';
import { db } from '../../src/firebase';
import toast from 'react-hot-toast';

export const getNanny = createAsyncThunk(
  'nanny/getNanny',
  async (_, thunkAPI) => {
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, '/'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const allNannies = Object.values(data);
        return allNannies;
      } else {
        toast.warn('No data available');
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  }
);
