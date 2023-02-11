import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  register: any;
  errors: FieldError | undefined;
}

const Input = ({ type, name, id, placeholder, register }: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id || undefined}
      {...register(name)}
      className="
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
        outline-none
      focus:border-titleColor"
    />
  );
};

export default Input;
