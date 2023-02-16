import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

interface UserIconProps {
  avatar: string | null | undefined;
}

const UserIcon = ({ avatar }: UserIconProps) => {
  return (
    <div className="w-10 h-10 bg-red-200 rounded-full">
      {avatar ? (
        <img
          className="w-full h-full rounded-full"
          src={avatar}
          alt="User Photo or Avatar"
        />
      ) : (
        <HiUserCircle className="w-full h-full p-0 m-0 rounded-full" />
      )}
    </div>
  );
};

export { UserIcon };
