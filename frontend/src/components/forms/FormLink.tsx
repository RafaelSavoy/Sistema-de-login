import React from 'react';
import { Link } from 'react-router-dom';

interface FormLinkProps {
  to: string;
  text: string;
}

const FormLink = ({ to, text }: FormLinkProps) => {
  return (
    <Link
      to={to}
      className="text-titleColor hover:text-blue-700700 transition duration-200 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default FormLink;
