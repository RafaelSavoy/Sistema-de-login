import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Insira um email'),
  password: yup.string().required('Insira uma senha')
});
