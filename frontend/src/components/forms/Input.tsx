import React from 'react';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, name, id, placeholder, onChange }: InputType) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id || undefined}
      onChange={onChange}
      required
      className='
        form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        placeholder:text-white
        bg-transparent
        border-b-2
        transition
        ease-in-out
        m-0
      focus:border-titleColor focus:outline-none'
    />
  );
};

export default Input;
