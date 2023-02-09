import { useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/User';

export function PrivateRoute() {
  const { user } = useContext(UserContext);
  if (!user.logged) {
    return <Navigate to={'/login'} />;
  }
  return <Outlet />;
}
