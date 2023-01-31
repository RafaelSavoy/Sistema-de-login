import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';

export function PrivateRoute() {
  const { user, updateUser } = useContext(UserContext);
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.logged) {
      navigate('/');
    }
  }, []);
  if (!user.logged) {
    return <Navigate to={'/login'} />;
  }
  return <Outlet />;
}
