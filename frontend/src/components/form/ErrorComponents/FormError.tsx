import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FormErrorProps {
  message: string;
  isVisible: boolean;
}
const FormError = ({ message, isVisible }: FormErrorProps) => {
  const errorVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  return (
    <AnimatePresence mode={'sync'}>
      {isVisible && (
        <motion.div
          key="error"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={errorVariants}
          className="border border-titleColor text-white px-4 py-3 rounded relative mb-3"
        >
          <span className="block sm:inline">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { FormError };
