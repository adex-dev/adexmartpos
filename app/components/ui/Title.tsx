import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export const Title: React.FC<TitleProps> = ({ children, size = 'md' }) => {
  const sizeClass = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return <h1 className={`font-bold ${sizeClass[size]}`}>{children}</h1>;
};
