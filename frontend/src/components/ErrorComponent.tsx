import React, { useEffect, useState } from 'react';

interface ErrorComponentProps {
  message: string;
  status?: boolean;
}
const ErrorComponent = ({ message, status }: ErrorComponentProps) => {
  const [error, setError] = useState(status);
  return (
    <div
      className='border border-titleColor text-white px-4 py-3 rounded relative mb-3'
      role='alert'
    >
      <span className='block sm:inline'>{message}</span>
    </div>
  );
};

export default ErrorComponent;
