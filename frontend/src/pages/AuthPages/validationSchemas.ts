import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/\d/, 'A senha deve conter pelo menos um número')
    .matches(
      /[@$!%*?&]/,
      'A senha deve conter pelo menos um símbolo (@, $, !, %, *, ?, &)'
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'As senhas não conferem')
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required('A senha é obrigatória')
});
