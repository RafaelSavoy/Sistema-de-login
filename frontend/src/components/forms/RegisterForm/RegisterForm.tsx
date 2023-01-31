import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorComponent from '../../ErrorComponent';
import EyeIcon from '../EyeIcon';
import Input from '../Input';
import InputPassword from '../InputPassword';
import SubmitButton from '../SubmitButton';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: boolean;
  errorMessage: string;
}

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  formState: FormState;
  loading: boolean;
}

export function RegisterForm({
  onSubmit,
  setForm,
  formState,
  loading,
}: FormProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...formState, [name]: value });
  }
  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col gap-2'
      autoComplete='off'
    >
      <h1 className='text-titleColor text-center text-4xl font-poppins'>
        Cadastre-se
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='form-group mb-6'>
          <Input
            type='text'
            placeholder='Primeiro Nome'
            name='firstName'
            onChange={handleChange}
          />
        </div>
        <div className='form-group mb-6'>
          <Input
            type='text'
            placeholder='Último Nome'
            name='lastName'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-group mb-6'>
        <Input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
      </div>
      <div className='form-group mb-6'>
        <InputPassword
          name='password'
          type={'password'}
          onChange={handleChange}
          placeholder='Senha'
        />
      </div>
      <div className='form-group mb-3'>
        <InputPassword
          name='confirmPassword'
          type='password'
          onChange={handleChange}
          placeholder='Confirme a senha'
        />
      </div>
      {formState.error ? (
        <ErrorComponent
          message={formState.errorMessage}
          status={formState.error}
        />
      ) : (
        ''
      )}
      <SubmitButton value='Registrar' loading={loading} />
      <p className='text-white mt-6 text-center'>
        Já é um membro?{' '}
        <Link
          to={'/login'}
          className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
        >
          Entrar
        </Link>
      </p>
    </form>
  );
}
