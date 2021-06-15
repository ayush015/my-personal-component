import * as React from 'react';

import './textarea.css';
export interface InputProp {
  label?: string;
  name: string;
  value?: string;
  placeholder: string;
}
export type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
export type InputArgs = InputProp & Omit<ReactInput, keyof InputProp>;
export const TextArea = ({ label, name, value, placeholder, ...props }: InputArgs) => {
  return (
    <>
      <label className="label">{label}</label>
      <input className="input" placeholder={placeholder} type="text" name={name} value={value} {...props} />
    </>
  );
};
