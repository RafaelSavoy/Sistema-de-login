import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ErrorComponent from '../../ErrorComponent';
import EyeIcon from '../EyeIcon';
import Input from '../Input';
import InputPassword from '../InputPassword';
import InputIcon from '../InputPassword';
import SubmitButton from '../SubmitButton';

interface FormState {
  email: string;
  password: string;
  error: boolean;
  errorMessage: string;
}

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  formState: FormState;
  loading: boolean;
}

export function LoginForm({
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
      autoComplete='off'
      className='flex flex-col gap-6'
    >
      <h1 className='text-titleColor text-center text-4xl font-poppins'>
        Entrar
      </h1>
      <div className='form-group'>
        <Input
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
        />
      </div>
      <div className='form-group mt-5'>
        <InputPassword
          name='password'
          type='password'
          onChange={handleChange}
          placeholder='Senha'
        />
      </div>
      {formState.error ? (
        <ErrorComponent message={formState.errorMessage}/>
      ) : (
        ''
      )}
      <div className='flex justify-between items-center mt-5'>
        <div className='form-group form-check flex items-center gap-2'>
          <input
            type='checkbox'
            className='form-check-input appearance-none h-4 w-4 border border-titleColor rounded-sm bg-transparent checked:bg-titleColor checked:border-titleColor focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer'
            id='exampleCheck2'
          />
          <label
            className='form-check-label inline-block text-formlabel'
            htmlFor='exampleCheck2'
          >
            Lembrar de mim
          </label>
        </div>
        <a
          href='#!'
          className='text-titleColor hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
        >
          Esqueceu a senha?
        </a>
      </div>
      <SubmitButton value='Login' loading={loading}/>
      <p className='text-formlabel text-center'>
        Não é um membro?{' '}
        <Link
          to={'/register'}
          className='text-titleColor hover:text-blue-700700 transition duration-200 ease-in-out'
        >
          Registrar
        </Link>
      </p>
    </form>
  );
}
