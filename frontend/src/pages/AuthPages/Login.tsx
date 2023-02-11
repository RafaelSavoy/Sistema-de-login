import { AxiosError } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/forms';
import { UserContext } from '../../contexts/User';
import { login } from '../../services/auth';

export interface UserLoginProps {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { user, updateUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user.logged) {
      navigate('/');
    }
  });

  function handleSubmit(data: UserLoginProps) {
    console.log(data);
  }
  return (
    <main className="flex justify-center items-center h-screen bg-zinc-900">
      <section className="p-5 sm:w-full lg:w-3/5 m-5 max-w-7xl">
        <LoginForm onSubmit={handleSubmit} loading={loading} />
      </section>
    </main>
  );
}
