import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'warning'
    | 'info'
    | 'success'
    | 'error'
    | 'outline'
    | 'dash'
    | 'active'
    | 'link'
    | 'disabled'
    | 'neutral';
  size?: 'xs' | 'sm' | 'md' | 'lg' |'xl';
  full?: boolean;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  full,
  loading,
  className = '',
  ...props
}) => {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    warning: 'btn-warning',
    info: 'btn-info',
    success: 'btn-success',
    error: 'btn-error',
    outline: 'btn-outline',
    dash: 'btn-dash',
    active: 'btn-active',
    link: 'btn-link',
    disabled: 'btn-disabled',
    neutral: 'btn-neutral',
  };
  const btnSize={
    xs:"btn-xs",
    sm:"btn-sm",
    md:"btn-md",
    lg:"btn-lg",
    xl:"btn-xl"
  }
  return (
    <button
      className={`btn ${variantClass[variant]} ${btnSize[size]} ${full ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};
