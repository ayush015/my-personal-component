import React from 'react';
import './button.css';

export interface ButtonProp {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProp> = ({ label, ...props }) => {
  return (
    <button type="button" className="button button-primary">
      {label}
    </button>
  );
};
