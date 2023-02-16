import React from 'react';

interface FormTitleProps {
  value: string;
}

const FormTitle = ({ value }: FormTitleProps) => {
  return (
    <h1 className="text-titleColor text-center text-4xl font-poppins mb-10">
      {value}
    </h1>
  );
};

export { FormTitle };
