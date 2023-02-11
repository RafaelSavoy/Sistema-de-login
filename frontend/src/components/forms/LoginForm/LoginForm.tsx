import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { UserLoginProps } from '../../../pages/AuthPages/Login';
import { loginSchema } from '../../../pages/AuthPages/validationSchemas';
import FormLink from '../FormLink';
import Input from '../Input';
import InputPassword from '../InputPassword';
import SubmitButton from '../SubmitButton';

interface FormProps {
  onSubmit: (data: UserLoginProps) => void;
  loading: boolean;
}

const defaultValues: UserLoginProps = {
  email: '',
  password: ''
};

export function LoginForm({ onSubmit, loading }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: defaultValues
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex flex-col gap-6"
    >
      <h1 className="text-titleColor text-center text-4xl font-poppins">
        Entrar
      </h1>
      <div className="form-group">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          errors={errors.email}
        />
      </div>
      <div className="form-group mt-5">
        <InputPassword
          name="password"
          type="password"
          placeholder="Senha"
          register={register}
          errors={errors.password}
        />
      </div>
      <div className="flex justify-between items-center mt-5">
        <FormLink to="/recover" text="Esqueceu a senha?" />
      </div>
      <SubmitButton value="Login" loading={loading} />
    </form>
  );
}
