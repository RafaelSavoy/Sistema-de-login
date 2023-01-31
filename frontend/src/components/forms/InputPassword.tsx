import React, { useRef, useState } from 'react';
import EyeIcon from './EyeIcon';

interface InputType {
  type: string;
  name: string;
  placeholder: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputPassword = ({
  type,
  name,
  id,
  placeholder,
  onChange,
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
    <div className='flex items-center border-b-2' ref={inputBox}>
      <input
        type={
          type !== 'password' ? type : passwordVisibility ? 'text' : 'password'
        }
        name={name}
        placeholder={placeholder}
        id={id || undefined}
        onChange={onChange}
        required
        onFocus={() => toggleInputBorder(true)}
        onBlur={() => toggleInputBorder(false)}
        className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-transparent
        border-none
        transition
        ease-in-out
        m-0
        focus:text-white focus:outline-none
        placeholder:text-white
        col-span-11
        '
      />
      <EyeIcon onClick={togglePasswordVisibility} />
    </div>
  );
};

export default InputPassword;
