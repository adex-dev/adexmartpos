import React from 'react';

type LabelProps = {
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label className="label">
      <span className="label-text">{children}</span>
    </label>
  );
};
