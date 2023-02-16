import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { HomeMain } from '../components/Home/HomeMain';
import Title from '../components/Title';
import { UserContext } from '../contexts/User';

const Home = () => {
  const { user, resetUser } = useContext(UserContext);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HomeMain />
    </>
  );
};

export default Home;
