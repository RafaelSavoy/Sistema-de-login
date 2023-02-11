import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../../components/forms';
import { UserContext } from '../../contexts/User';

export interface UserRegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  const { user, updateUser } = useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  function onSubmit(data: UserRegisterProps): void {
    const userData = data;
    Reflect.deleteProperty(userData, 'confirmPassword');
    setLoading(true);
    console.log({ ...userData });
  }

  return (
    <main className="flex justify-center items-center h-screen bg-zinc-900">
      <section className="p-5 sm:w-full lg:w-3/5 m-5 max-w-7xl">
        <RegisterForm onSubmit={onSubmit} loading={loading} />
      </section>
    </main>
  );
}
