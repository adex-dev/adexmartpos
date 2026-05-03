import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  size?: 'xs'|'sm' | 'md' | 'lg' | 'xl';
}& React.HTMLAttributes<HTMLHeadingElement>;

export const Title: React.FC<TitleProps> = ({ children, size = 'md',className = '',...props}) => {
  const sizeClass = {
    xs: 'text-xs',
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return <h1 className={`${sizeClass[size]} ${className ? className :'font-bold'}`} {...props}>{children}</h1>;
};
