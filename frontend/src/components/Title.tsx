import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-titleColor xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-poppins">
      {children}
    </h1>
  );
};

export default Title;
