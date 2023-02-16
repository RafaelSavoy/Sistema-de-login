import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .required('Insira um nome de usuário')
    .min(3, 'Mínimo de 3 caracteres')
    .max(16, 'Máximo de 16 caracteres'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Insira um email'),
  password: yup
    .string()
    .required('Insira uma senha')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/\d/, 'A senha deve conter pelo menos um número')
    .matches(
      /[@$!%*?&]/,
      'A senha deve conter pelo menos um símbolo (@, $, !, %, *, ?, &)'
    ),
  confirmPassword: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'As senhas não conferem')
});
