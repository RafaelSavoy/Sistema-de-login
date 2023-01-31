import { verify } from 'crypto';
import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { UserContext } from './contexts/User';
import Home from './pages/Home';
import { Login } from './pages/AuthPages/Login';
import NotFoundPage from './pages/NotFoundPage';
import { Register } from './pages/AuthPages/Register';
import { verifySession } from './services/token/verifySession';

function App() {
  const { user, updateUser, getUserToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    verifySession(token, user, (err, res) => {
      if (err) {
        return console.log(err);
      }
      const { firstName, lastName, _id } = res?.data;
      updateUser(firstName, lastName, _id, true, token ? token : '');
    });
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
