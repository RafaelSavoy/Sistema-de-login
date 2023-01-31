import { Axios, AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../../components/forms';
import { UserContext } from '../../contexts/User';
import { register } from '../../services/auth';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: boolean;
  errorMessage: string;
}
export function Register() {
 
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: false,
    errorMessage: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user.logged) {
      navigate('/');
    }
  });

  function setFormError(errorMessage: string, error: boolean) {
    setForm({ ...form, error, errorMessage });
  }
  async function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    setLoading(true);
    const { firstName, lastName, email, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      return setFormError('As senhas não conferem!', true);
    }
    try {
      const response = await register(
        firstName,
        lastName?.toString(),
        email,
        password
      );
      updateUser(
        firstName,
        lastName,
        response.data.userData._id,
        true,
        response.data.token
      );
      navigate('/');
    } catch (e) {
      setLoading(false);
      const error = e as AxiosError<any, any>;
      setFormError(error.response?.data.message as string, true);
    }
  }
  return (
    <main className='flex justify-center items-center h-screen bg-zinc-900'>
      <section className='p-5 sm:w-full lg:w-3/5 m-5 max-w-7xl'>
        <RegisterForm
          onSubmit={handleSubmit}
          setForm={setForm}
          formState={form}
          loading={loading}
        />
      </section>
    </main>
  );
}
