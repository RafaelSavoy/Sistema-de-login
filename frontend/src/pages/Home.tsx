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
    <div>
      <h1 id='text'>Parabéns,{user.firstName}, você está logado!</h1>
      <h2>Agora está autorizado a me seguir </h2>
      <button onClick={handleLogout}>Deslogar</button>
    </div>
  );
};

export default Home;
