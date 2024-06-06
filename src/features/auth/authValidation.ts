import { object, string } from 'yup';

export const loginSchema = object({
  email: string().required('Email is a required field'),
  password: string().required('Password is a required field'),
});
