import React, { useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

import EyeIcon from './EyeIcon';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  register: any;
  errors: FieldError | undefined;
}

const InputPassword = ({
  type,
  name,
  id,
  placeholder,
  register,
  errors
}: InputType) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const inputBox = useRef() as React.MutableRefObject<HTMLInputElement>;

  function togglePasswordVisibility(): void {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  }

  function toggleInputBorder(status: boolean): void {
    if (status == true) {
      inputBox.current.classList.add('border-titleColor');
    } else if (status == false) {
      inputBox.current.classList.remove('border-titleColor');
    }
  }

  return (
    <>
      <div className="flex items-center border-b-2" ref={inputBox}>
        <input
          type={
            type !== 'password'
              ? type
              : passwordVisibility
              ? 'text'
              : 'password'
          }
          placeholder={placeholder}
          id={id || undefined}
          {...register(name)}
          required
          onFocus={() => toggleInputBorder(true)}
          onBlur={() => toggleInputBorder(false)}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        bg-transparent
        text-white
        border-none
        transition
        ease-in-out
        m-0
        outline-none
        focus:text-white
        placeholder:text-white
        col-span-11
        "
        />
        <EyeIcon onClick={togglePasswordVisibility} />
      </div>
      <div>
        <p className="text-red-400 text-right">{errors?.message}</p>
      </div>
    </>
  );
};

export default InputPassword;
