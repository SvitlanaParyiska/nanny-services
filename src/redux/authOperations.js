import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth,
} from 'firebase/auth';
import toast from 'react-hot-toast';

export const registration = createAsyncThunk(
  'auth/registration',
  async (body, thunkAPI) => {
    const { name, email, password } = body;
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      toast.success('You have successfully registration');
      return {
        email: user.email,
        id: user.uid,
        name: user.displayName,
      };
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak.');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use.');
      } else {
        toast.error('Please try again later.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (body, thunkAPI) => {
  const { email, password } = body;
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    toast.success('You have successfully login');
    return {
      email: user.email,
      id: user.uid,
      name: user.displayName,
    };
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      toast.error('Login invalid!');
    } else {
      toast.error('Something went wrong. Please try again!');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const auth = getAuth();
    await signOut(auth);
    toast.success('You have successfully logged out');
  } catch (error) {
    toast.error('Something went wrong. Please try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});
