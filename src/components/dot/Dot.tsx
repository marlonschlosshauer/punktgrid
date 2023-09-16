import React from "react";

export interface DotProps {
  active?: boolean;
}

export const Dot: React.FC<DotProps> = ({ active = false }) => (
  <div
    className={`w-[1rem] h-[1rem] border-4 border-gray-300 ${
      active && "border-blue-300"
    } hover:border-green-400 active:border-green-400 rounded-full bg-gray-200 hover:bg-green-300 active:bg-green-300 ease-in-out duration-200`}
  />
);
