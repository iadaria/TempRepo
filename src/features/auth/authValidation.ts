import { object, string } from 'yup';

export const loginSchema = object({
  email: string().required('Email is a required field').email(),
  password: string().required('Password is a required field').min(6).max(36),
});
