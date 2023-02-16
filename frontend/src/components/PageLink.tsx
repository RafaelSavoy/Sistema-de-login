import React from 'react';
import { Link } from 'react-router-dom';

interface PageLinkProps {
  to: string;
  text: string;
}

const PageLink = ({ to, text }: PageLinkProps) => {
  return (
    <Link
      to={to}
      className="text-secondColor hover:text-blue-700700 transition duration-200 ease-in-out"
    >
      {text}
    </Link>
  );
};

export { PageLink };
