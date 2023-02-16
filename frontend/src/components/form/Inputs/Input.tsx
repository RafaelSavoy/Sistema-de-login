import React from 'react';
import { FieldError } from 'react-hook-form';
import { InputError } from '../ErrorComponents/InputError';
import Styles from './styles.module.css';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  error: FieldError | undefined;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Input = ({
  type,
  name,
  placeholder,
  register,
  error,
  handleBlur
}: InputType) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={Styles.input}
        onBlur={async (e) => await handleBlur(e)}
      />
      {error ? <InputError message={error.message} /> : <br></br>}
    </div>
  );
};

export { Input };
