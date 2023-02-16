import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputPassword, Input } from './Inputs';
import { SubmitButton } from './Buttons/';
import { PageLink } from '../PageLink';
import Styles from './styles.module.css';

import { registerSchema } from './schemas';
import { UserRegisterProps } from '../../pages/AuthPages/Register';
import { FormTitle } from './Texts';
import { FormError } from './ErrorComponents';
import { AnimatePresence } from 'framer-motion';

interface FormProps {
  onSubmit: (data: UserRegisterProps) => void;
  loading: boolean;
  error: {
    status: boolean;
    message: string;
  };
}

const defaultValues: UserRegisterProps = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

type FieldName = keyof UserRegisterProps;

export function RegisterForm({ onSubmit, loading, error }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue
  } = useForm<UserRegisterProps>({
    defaultValues,
    resolver: yupResolver(registerSchema)
  });

  async function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name as FieldName;
    await trigger(fieldName);
    setValue(fieldName, e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={Styles.form}
      autoComplete="off"
    >
        <FormTitle value="Cadastre-se" />
        <FormError message={error.message} isVisible={error.status} />
        <Input
          type="text"
          placeholder="Nome de usuário"
          register={register}
          name="userName"
          error={errors.userName}
          handleBlur={handleBlur}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
          handleBlur={handleBlur}
        />
        <InputPassword
          name="password"
          type={'password'}
          register={register}
          placeholder="Senha"
          error={errors.password}
          handleBlur={handleBlur}
        />
        <InputPassword
          name="confirmPassword"
          type="password"
          register={register}
          placeholder="Confirme a senha"
          error={errors.confirmPassword}
          handleBlur={handleBlur}
        />
        <div className="flex center justify-end items-center gap-2">
          <p className="text-white text-center">Já é um membro?</p>
          <PageLink to="/login" text="Logar" />
        </div>
        <SubmitButton value="Registrar" loading={loading} />
    </form>
  );
}
