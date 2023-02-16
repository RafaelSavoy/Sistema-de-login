import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from './schemas';

import { UserLoginProps } from '../../pages/AuthPages/Login';

import { PageLink } from '../PageLink';
import { SubmitButton } from './Buttons/';
import { Input, InputPassword } from './Inputs';

import Styles from './styles.module.css';
import { FormTitle } from './Texts';
import { FormError } from './ErrorComponents';

interface FormProps {
  onSubmit: (data: UserLoginProps) => void;
  loading: boolean;
  error: {
    status: boolean;
    message: string;
  };
}

const defaultValues: UserLoginProps = {
  email: '',
  password: ''
};

type FieldName = keyof UserLoginProps;

export function LoginForm({ onSubmit, loading, error }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue
  } = useForm<UserLoginProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginSchema)
  });

  async function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name as FieldName;
    await trigger(fieldName);
    setValue(fieldName, e.target.value);
  }
  return (
    <form
      className={Styles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div>
        <FormTitle value="Entrar" />
        <FormError message={error.message} isVisible={error.status} />
      </div>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        error={errors.email}
        handleBlur={handleBlur}
      />
      <InputPassword
        name="password"
        type="password"
        placeholder="Senha"
        register={register}
        error={errors.password}
        handleBlur={handleBlur}
      />
      <div className="flex justify-between items-center">
        <PageLink to="/recover" text="Recuperar senha" />
        <PageLink to="/register" text="Criar conta" />
      </div>
      <SubmitButton value="Login" loading={loading} />
    </form>
  );
}
