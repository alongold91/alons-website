'use-client';
import { clsx } from 'clsx';
import React from 'react';
import style from './buttons.module.css';

interface IconTogglerProps {
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => unknown;
}

const IconToggler = ({children, isActive, disabled, onClick}: IconTogglerProps) => {

  const appliedClass = clsx(style['icon-toggler'], {[style['icon-toggler-active']]: isActive });

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  }
  return (
    <button disabled={disabled} onClick={handleButtonClick} className={appliedClass}>
      {children}
    </button>
  )
}

export default IconToggler