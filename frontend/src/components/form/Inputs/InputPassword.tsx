import React, { useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { InputError } from '../ErrorComponents/InputError';
import Styles from './styles.module.css';
import EyeIcon from './Icons/EyeIcon';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  error: FieldError | undefined;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const InputPassword = ({
  name,
  placeholder,
  register,
  error,
  handleBlur
}: InputType) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const inputBox = useRef() as React.MutableRefObject<HTMLInputElement>;

  function togglePasswordVisibility(): void {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  }

  function toggleInputBorder(status: boolean): void {
    if (status) {
      return inputBox.current.classList.add('border-secondColor');
    } else {
      inputBox.current.classList.remove('border-secondColor');
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center border-b-2" ref={inputBox}>
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder={placeholder}
            {...register(name)}
            onFocus={() => toggleInputBorder(true)}
            onBlur={async (e) => {
              toggleInputBorder(false);
              await handleBlur(e);
            }}
            className={Styles.passwordInput}
          />
          <EyeIcon onClick={togglePasswordVisibility} />
        </div>
        {error ? <InputError message={error.message} /> : <br></br>}
      </div>
    </>
  );
};

export { InputPassword };
