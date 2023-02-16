import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export interface User {
  _id: string;
  userName: string;
  logged: boolean;
  avatar?: string | null;
}
interface UserUpdate {
  _id: string;
  userName: string;
  avatar?: string;
}

type UserContextType = {
  user: User;
  updateUser: (user: UserUpdate, token: string) => void;
  resetUser: () => void;
  getUserToken: () => string | undefined;
  setUserToken: (token: string) => void;
};

type UserProviderType = {
  children: React.ReactNode;
};

const defaultValues = {
  _id: '',
  userName: '',
  logged: false,
  avatar: null
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User>(defaultValues);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  function setUserAvatar(avatar: string) {
    setUser({ ...user, avatar });
  }

  function updateUser(user: UserUpdate, token: string): void {
    const { _id, userName, avatar } = user;
    setUser({ _id, userName, avatar, logged: true });
    setCookie('token', token);
  }
  function resetUser() {
    setUser({ userName: '', _id: '', avatar: null, logged: false });
    removeCookie('token');
    navigate('/login');
  }
  function getUserToken(): string | undefined {
    return cookies.token;
  }
  function setUserToken(token: string): void {
    setCookie('token', token);
  }

  return (
    <UserContext.Provider
      value={{ user, updateUser, resetUser, getUserToken, setUserToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
