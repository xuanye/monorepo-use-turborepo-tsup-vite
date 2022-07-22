import React from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function Button({ type = 'button', children, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} style={{ padding: '8px 10px' }} {...props}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
