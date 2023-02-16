import React from 'react';
import { motion } from 'framer-motion';

interface InputErrorProps {
  message: string | undefined;
}

const InputError = ({ message }: InputErrorProps) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10000 }}
      transition={{ duration: 0.5 }}
      className="text-red-400 text-right"
    >
      <p>{message || 'None'}</p>
    </motion.span>
  );
};

export { InputError };
