import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/forms';
import { UserContext } from '../../contexts/User';
import { login } from '../../services/auth';

export interface FormState {
  email: string;
  password: string;
  error: boolean;
  errorMessage: string;
}

export function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { user, updateUser } = useContext(UserContext);
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
    error: false,
    errorMessage: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user.logged) {
      navigate('/');
    }
  });

  function setFormError(errorMessage?: string, status?: boolean): void {
    if (status) {
      setForm({ ...form, errorMessage: errorMessage || '', error: status });
    } else {
      setForm({ ...form, errorMessage: errorMessage || '' });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const { email, password } = form;
    try {
      const response: any = await login(email, password, setFormError);
      const { firstName, lastName, _id } = response.data.userData;
      updateUser(firstName, lastName, _id, true, response.data.token);
      setLoading(false);
      navigate('/');
    } catch (e) {
      const error = e as AxiosError;
      if (error.code == 'ECONNABORTED')
        return setFormError(
          'Erro interno, contate o suporte do sistema (Ninguém, kkkkkkkkkkk)',
          true
        );
      setFormError('Usuário ou senha inválidos', true);
    }
    setLoading(false);
  }

  return (
    <main className='flex justify-center items-center h-screen bg-zinc-900'>
      <section className='p-5 sm:w-full lg:w-3/5 m-5 max-w-7xl'>
        <LoginForm
          onSubmit={handleSubmit}
          setForm={setForm}
          formState={form}
          loading={loading}
        />
      </section>
    </main>
  );
}
