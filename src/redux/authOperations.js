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
    try {
      console.log(body.email, body.password);
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      await updateProfile(auth.currentUser, {
        displayName: body.name,
      });
      toast.success('You have successfully registration');
      return response.user;
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak.');
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use.');
      } else {
        toast.error('Please try again later.');
      }
      return { error: error.message };
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (body, thunkAPI) => {
  try {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    const { uid, displayName, email } = response.user;
    toast.success('You have successfully login');
    return { uid, displayName, email };
  } catch (e) {
    console.log(e);
    // toast.error('Something went wrong. Please try again!');
    return { error: e.message };
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const auth = getAuth();
    await signOut(auth);
    toast.success('You have successfully logged out');
  } catch (e) {
    toast.error('Something went wrong. Please try again!');
    return { error: e.message };
  }
});
