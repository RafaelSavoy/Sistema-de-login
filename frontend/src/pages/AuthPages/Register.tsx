import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../../components';
import { RegisterForm } from '../../components/form';
import { UserContext } from '../../contexts/User';
import { register } from '../../services/auth';
import Styles from './styles.module.css';

export interface UserRegisterProps {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  const { updateUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  async function onSubmit(data: UserRegisterProps) {
    resetError();
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await register(data);
        console.log(response)
        updateUser(response.userData, response.token);
        navigate('/');
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
        <RegisterForm onSubmit={onSubmit} loading={loading} error={formError} />
      </AnimatedSection>
    </main>
  );
}
