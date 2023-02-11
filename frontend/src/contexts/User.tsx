import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

export interface User {
  firstName: string;
  lastName: string;
  id: string;
  logged: boolean;
}

type UserContextType = {
  user: User;
  updateUser: (
    firstName: string,
    lastName: string,
    id: string,
    logged: boolean,
    token: string
  ) => void;
  resetUser: () => void;
  getUserToken: () => string | undefined;
  setUserToken: (token: string) => void;
};

type UserProviderType = {
  children: React.ReactNode;
};

const defaultValues = {
  firstName: '',
  lastName: '',
  id: '',
  logged: false
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState(defaultValues);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  function updateUser(
    firstName: string,
    lastName: string,
    id: string,
    logged: boolean,
    token: string
  ): void {
    setUser({ firstName, lastName, id, logged });
    setCookie('token', token);
  }
  function resetUser() {
    setUser({ firstName: '', lastName: '', id: '', logged: false });
    removeCookie('token');
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
