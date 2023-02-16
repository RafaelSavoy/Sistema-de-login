import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import { HiUserCircle } from 'react-icons/hi';
import { UserIcon } from './UserIcon';

const Header = () => {
  const { user, resetUser } = useContext(UserContext);
  function handleLogout() {
    resetUser();
  }
  return (
    <header className="bg-black bg-opacity-3 w-screen flex justify-end align-middle p-2">
      <nav className="flex align-middle">
        <button className="font-openSans text-white">
          <UserIcon avatar={user.avatar} />
        </button>
      </nav>
    </header>
  );
};

export { Header };
