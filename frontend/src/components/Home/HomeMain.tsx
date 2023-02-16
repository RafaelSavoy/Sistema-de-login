import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import Title from '../Title';

const HomeMain = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="flex flex-col">
      <div className="flex gap-2 flex-col m-2">
        <Title>Olá {user.userName}.</Title>
        <Title>O que você está pensando hoje?</Title>
      </div>
      <section className="min-h-full w-1/2 mx-auto my-5 bg-gray-700 rounded"></section>
    </main>
  );
};

export { HomeMain };
