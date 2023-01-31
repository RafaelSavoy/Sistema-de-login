import React from 'react';

interface ButtonProps {
  value: string;
  loading: boolean;
}

const SubmitButton = ({ value, loading }: ButtonProps) => {
  return (
    <button
      type='submit'
      className={`w-full
      p-2
      bg-transparent
      border
      border-1
      text-white
      font-opensans
      text-s
      uppercase
      rounded
      shadow-md
      hover:bg-white hover:shadow-lg
      hover:text-black
      focus:bg-white focus:text-black focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-white active:text-black active:shadow-lg
      transition
      duration-150
      ${loading ? 'cursor-not-allowed' : ''}
      ease-in-out`}
      disabled={loading}
    >
      {loading ? 'Carregando' : value}
    </button>
  );
};

export default SubmitButton;
