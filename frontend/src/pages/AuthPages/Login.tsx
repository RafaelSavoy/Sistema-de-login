import axios from 'axios';
import { rule } from 'postcss';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection, LoginForm } from '../../components';
import { UserContext } from '../../contexts/User';
import { login } from '../../services/auth';
import { UserLoginRequest } from '../../services/auth/types';
import Styles from './styles.module.css';

const loginDefaultValues = {
  email: '',
  password: ''
};

export interface UserLoginProps {
  email: string;
  password: string;
}
export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, updateUser } = useContext(UserContext);
  const [formError, setFormError] = useState<{
    status: boolean;
    message: string;
  }>({
    status: false,
    message: ''
  });
  async function setError(message: string) {
    setFormError({ status: true, message });
  }
  async function resetError() {
    setFormError({ ...formError, status: false });
  }
  async function handleSubmit(data: UserLoginRequest) {
    resetError();
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await login(data);
        updateUser(response.userData, response.token);
        navigate('/')
      } catch (e: any) {
        if (axios.isAxiosError(e)) {
          const message = e.response?.data.message;
          setError(message);
        } else if (e.request) {
          setError(
            'Ocorreu um erro no sistema, entre em contato com o suporte.'
          );
        }
      } finally {
        setLoading(false);
      }
    }, 1000 * 2);
  }
  return (
    <main className={Styles.main}>
      <AnimatedSection className={Styles.section}>
        <LoginForm
          onSubmit={handleSubmit}
          loading={loading}
          error={formError}
        />
      </AnimatedSection>
    </main>
  );
}
