import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import thinking from '/thinking.gif';

const NotFoundPage = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <section>
        <Title>Página não encontrada</Title>
        <img src={thinking} className="w-2/4 h-4/4 m-2" />
        <p className="text-white xs:text-xl sm:text-1xl lg:text-2xl xl:text-3xl font-light">
          Volte para a{' '}
          <Link to="/" className="text-cyan-300 underline">
            home
          </Link>
        </p>
      </section>
    </main>
  );
};

export default NotFoundPage;
