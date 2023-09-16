import React from "react";

export interface DotProps {
  active?: boolean;
}

export const Dot: React.FC<DotProps> = ({ active = true }) => (
  <div
    className={`h-4 w-4 border-4 border-gray-300 hover:border-green-400 rounded-full bg-gray-200 hover:bg-green-300 ease-in-out duration-200`}
  />
);
