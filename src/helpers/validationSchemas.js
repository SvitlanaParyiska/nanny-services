import * as yup from 'yup';

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Field is required')
    .min(3, 'Minimum 3 characters')
    .max(64, 'Maximum 64 characters'),
  email: yup
    .string()
    .required('Field is required')
    .matches(emailRegexp, 'Enter a correct email'),
  password: yup
    .string()
    .required('Field is required')
    .min(8, 'Minimum 8 characters')
    .max(64, 'Maximum 64 characters'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Field is required')
    .matches(emailRegexp, 'Enter a correct email'),
  password: yup
    .string()
    .required('Field is required')
    .min(8, 'Minimum 8 characters')
    .max(64, 'Maximum 64 characters'),
});

export const makeOrderSchema = yup.object().shape({
  address: yup
    .string()
    .required('Field is required')
    .min(10, 'Too Short!')
    .max(64, 'Maximum 64 characters'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Field is required'),
  email: yup
    .string()
    .required('Field is required')
    .matches(emailRegexp, 'Enter a correct email'),
  time: yup.string().required('Required'),
  parents: yup.string().required('Required'),
});
