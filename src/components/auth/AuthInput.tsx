"use client";

import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const AuthInput = ({ label, id, ...props }: AuthInputProps) => {
  return (
    <div className="group-input">
      <label htmlFor={id} className="text-[15px]">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-md border text-[14px] border-gray-400 text-gray-600 outline-0 px-2 py-1 mt-1"
      />
    </div>
  );
};

export default AuthInput;
