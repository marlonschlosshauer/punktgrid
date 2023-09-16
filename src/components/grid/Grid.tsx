import React from "react";
import { Dot } from "../dot/Dot";

export interface GridProps {
  width?: number;
  height?: number;
  dots?: number[][];
}

export const Grid: React.FC<GridProps> = ({
  width = 20,
  height = 20,
  dots = [],
}) => (
  <div className="flex gap-2 flex-row bg-gray-200 rounded-md m-4 p-4 justify-center align-center margin-auto">
    {Array.from({ length: width }).map((_, x) => (
      <div className="flex gap-2 flex-col">
        {Array.from({ length: height }).map((_, y) => (
          <Dot key={`${x}${y}`} active={!dots?.[x]?.[y]} />
        ))}
      </div>
    ))}
  </div>
);
