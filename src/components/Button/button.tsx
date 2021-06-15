import * as React from 'react';
import './button.css';

export interface ButtonProp {
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProp> = ({ danger = false, primary = false, success = false, label, ...props }) => {
  const color = primary
    ? 'btn btn-primary'
    : danger
    ? 'btn btn-danger'
    : success
    ? 'btn btn-success'
    : 'btn btn-secondary';
  return (
    <button type="button" className={color} {...props}>
      {label}
    </button>
  );
};
