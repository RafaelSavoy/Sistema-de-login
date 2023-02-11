import React from 'react';
import { useForm } from 'react-hook-form';
import { UserRegisterProps } from '../../../pages/AuthPages/Register';
import { registerSchema } from '../../../pages/AuthPages/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputPassword from '../InputPassword';
import SubmitButton from '../SubmitButton';
import Input from '../Input';
import FormLink from '../FormLink';

interface FormProps {
  onSubmit: (data: UserRegisterProps) => void;
  loading: boolean;
}

const defaultValues: UserRegisterProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function RegisterForm({ onSubmit, loading }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(registerSchema)
  });
  return (
    <>
      <h1 className="text-titleColor text-center text-4xl font-poppins mb-10">
        Cadastre-se
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
        autoComplete="off"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <Input
              type="text"
              placeholder="Primeiro Nome"
              register={register}
              name="firstName"
              errors={errors.firstName}
            />
          </div>
          <div className="form-group mb-6">
            <Input
              type="text"
              placeholder="Último Nome"
              name="lastName"
              register={register}
              errors={errors.lastName}
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            errors={errors.email}
          />
        </div>
        <div className="form-group mb-6">
          <InputPassword
            name="password"
            type={'password'}
            register={register}
            placeholder="Senha"
            errors={errors.password}
          />
        </div>
        <div className="form-group mb-3">
          <InputPassword
            name="confirmPassword"
            type="password"
            register={register}
            placeholder="Confirme a senha"
            errors={errors.confirmPassword}
          />
        </div>
        <SubmitButton value="Registrar" loading={loading} />
        <div className='flex center justify-center items-center mt-3 gap-2'>
          <p className="text-white text-center">Já é um membro?</p>
          <FormLink to="/login" text="Logar" />
        </div>
      </form>
    </>
  );
}
