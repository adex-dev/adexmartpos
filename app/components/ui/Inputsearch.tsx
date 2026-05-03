import { SearchBig } from '@boxicons/react';
import React from 'react';
// Omit untuk menghilangkan atribut bawaan html
type InputSearchProps = {
  label?: string;
  error?: string;
  size?: 'xs'|'sm' | 'md' | 'lg' | 'xl';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'>;

export const InputSearch: React.FC<InputSearchProps> = ({
  label,
  error,
  className = '',
  size='sm',
  ...props
}) => {
 const inputSize ={
    xs:"input-xs",
    sm:"input-sm",
    md:"input-md",
    lg:"input-lg",
    xl:"input-xl",
  }
  return (
    <>
      <label className='relative w-full'>
        <div className="absolute left-2 top-1 z-10"><SearchBig size={size as any} /></div>
      <input
        type='search'
        className={`pl-10 ${inputSize[size]} input input-bordered w-full ${error ? 'input-error' : ''} ${className}`}
        {...props}
        />
        </label>
    </>
  );
};
