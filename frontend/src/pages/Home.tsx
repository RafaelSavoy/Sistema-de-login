import React, { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import './style.css';

const Home = () => {
  const { user, resetUser } = useContext(UserContext);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  function handleLogout() {
    removeCookie('token');
    resetUser();
    navigate('/');
  }
  return (
    <main className='h-screen bg-zinc-900'>

    </main>
  );
};

export default Home;
