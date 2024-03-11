"use client";

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: string;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg 
hover:opacity-80
    transition
    w-full
    border-slate-500
    flex
    items-center
    justify-center
    gap-2
    ${outline ? "bg-white" : "bg-slate-500"}
    ${outline ? "text-slate-500" : "text-white"}
    ${small ? "text-small font-light" : "text-md font-semibold"}
    ${small ? "py-1 px-2" : "py-3 px-4 border-2"}
    ${custom ? custom : ""}
`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
