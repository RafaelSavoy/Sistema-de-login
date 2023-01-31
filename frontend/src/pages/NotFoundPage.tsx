import React from 'react';
import { Link } from 'react-router-dom';
import thinking from '/thinking.gif';

const NotFoundPage = () => {
  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center bg-zinc-900'>
      <section className='xs:w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center'>
        <h1 className='text-titleColor xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins'>
          Página não encontrada
        </h1>
        <img src={thinking} className='w-2/4 h-4/4 m-2' />
        <p className='text-white xs:text-xl sm:text-1xl lg:text-2xl xl:text-3xl font-light'>
          Volte para a {' '}
          <Link to='/' className='text-cyan-300 underline'>
            home
          </Link>
        </p>
      </section>
    </main>
  );
};

export default NotFoundPage;
